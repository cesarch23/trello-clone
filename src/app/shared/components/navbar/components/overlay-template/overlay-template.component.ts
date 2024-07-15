import { Component, Input } from '@angular/core';
import {faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import {faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp'
@Component({
  selector: 'app-overlay-template',
  templateUrl: './overlay-template.component.html',
  styleUrls: ['./overlay-template.component.css']
})
export class OverlayTemplateComponent {

  @Input() templates:any[] = [];
  faDown = faAngleDown
  faUp = faAngleUp

}
