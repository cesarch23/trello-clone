import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequesStatus } from 'src/app/core/models/request-status.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { showToast } from 'src/app/shared/utils/notification';
const body = document.querySelector('body') as HTMLBodyElement;
const noitfication = document.querySelector('.notification') as HTMLParagraphElement;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  registerFormStatus: RequesStatus;
  showFormRegister:boolean=false;
  formEmailValidationStatus: RequesStatus;
  mistake:HttpErrorResponse = new HttpErrorResponse({});

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router: Router
  ){
    this.registerFormStatus= 'init';
    this.formEmailValidationStatus= 'init';
  }

  registerForm: FormGroup = this.formBuilder.nonNullable.group({
    name: ["",[Validators.required, Validators.minLength(2)]],
    email:["",[Validators.required, Validators.pattern(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)]],
    password:["", [Validators.required,Validators.minLength(8)]],
    confirmPassword:["",[Validators.required, Validators.minLength(8)]]
  })

  formEmailValidation:FormGroup = this.formBuilder.nonNullable.group({
    email: ["",[Validators.required, Validators.pattern(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)]]
  })

  isInvalidField(field:string){
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched; 
  }
  showErrorMessage(field:string){
    const errors = this.registerForm.controls[field].errors || {};
    for(const key of Object.keys(errors))
    {
      if(key==='required')     return 'The field must be completed'
      if(key==='pattern')      return 'Enter valid email'
      if(key==='minlength')    return `Enter at least ${errors['minlength'].requiredLength} letters`
    }
    return "";
  }
  showFormError(){
     if(this.mistake.error['message']==='SqliteError: UNIQUE constraint failed: user.email')
        return 'The email you entered already exists.';
     if(this.mistake.error['message'][0] ==='password is too short')
        return 'Your password must be have more than 8 letters';
     return "Error on our server, try again later";
  }
  validarEmail(){
    if(this.formEmailValidation.invalid)
    {
      this.formEmailValidation.markAllAsTouched();
      return;
    }
    this.formEmailValidationStatus='loading'
    const { email } = this.formEmailValidation.getRawValue();
    
    this.authService.isAvailableEmail(email).subscribe({
      next:(value)=>{
        this.formEmailValidationStatus='success'
        if(value.isAvailable){
          this.showFormRegister=true;
          this.registerForm.controls['email'].setValue(email);
        }else{
          this.router.navigate(['/auth/login/'],{queryParams: {email:email}})
        }

      },
      error:()=>{
        this.formEmailValidationStatus='failed'
      }
    })
  }
  

  register(){
    if(this.registerForm.invalid) { 
      this.registerForm.markAllAsTouched();
      return;
    }
    this.registerFormStatus = 'loading';
    const { email, password, name } = this.registerForm.getRawValue();
    this.authService.register(name,email, password).subscribe({
      next: (value)=>{
        this.registerFormStatus = 'success';
        this.registerForm.reset();
        showToast("Sus datos se registraron de manera exitosa");
        this.authService.login(email,password).subscribe({
            next :()=>this.router.navigate(["/admin"]),
            error:()=>{
              showToast("Sus datos se registraron de manera exitosa. Ahora, intente iniciar sesión");
              this.router.navigate(["/auth/login"])}
          })
      },
      error: (error)=>{
        this.registerFormStatus = 'failed';
        setTimeout(()=>{
          this.registerFormStatus = 'init';
        },3000)
      },

    })
  }
 



}
