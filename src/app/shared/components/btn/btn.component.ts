import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  @Input() typeButton:'submit'  | 'reset' | 'button' = 'button';
  
  @Input() loader: boolean=false;
  @Input() actived: boolean=false;
}
