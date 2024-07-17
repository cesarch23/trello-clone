import { Component, Input } from '@angular/core';
import { Board } from 'src/app/shared/interfaces/board.interface';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input()board:Board={id:"",name:"", image:"",starred:false,title:"",workspaceName:""};
  faStar=faStar;
}
