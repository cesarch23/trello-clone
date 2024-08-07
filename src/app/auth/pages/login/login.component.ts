import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequesStatus } from 'src/app/core/models/request-status.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @Input() email?:string;
  formStatus: RequesStatus;
  constructor(
    private formBuilder: FormBuilder, 
    private authService:AuthService,
    private router:Router
  ){ 
    this.formStatus = 'init'
  }

  myform:FormGroup = this.formBuilder.nonNullable.group(
    {
      email:["",[Validators.required, Validators.pattern(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/)]],
      password:["",[Validators.required, Validators.minLength(3)]]
    })


  ngOnInit(): void {
    if(this.email && this.email?.length>0) 
      this.myform.controls['email'].setValue(this.email);
  }
  isInvalidField(field:string){
     return this.myform.controls[field].errors && this.myform.controls[field].touched;
  }
  showErrorMessage(field:string){
    const errors = this.myform.controls[field].errors || {};
    const keys = Object.keys(errors);
    for(const key of keys)
      { 
        if(key=== 'required') return 'Debe completar el campo';
        if(key=== 'pattern') return 'Debe ingresar un email valido';
        if(key=== 'minlength') return `Debe de ingresar al menos ${errors['minlength'].requiredLength} letras`;
      }
      return "";
  }
  submit(){
    
    this.formStatus='loading'
    if(this.myform.invalid){
      this.myform.markAllAsTouched();
      this.formStatus='init'
      return;
    }
    const {email, password } = this.myform.getRawValue();

    this.authService.login(email,password).subscribe({
      next: (val) => {
         this.formStatus='success';
         this.router.navigateByUrl('/admin/boards');
         this.myform.reset();
        },
      error: (error)=>{
        this.formStatus='failed'
        setTimeout(()=>{
          this.formStatus='init'
        },3000)
      }
    })

   
    
  }

}
