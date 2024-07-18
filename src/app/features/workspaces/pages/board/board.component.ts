import { Component } from '@angular/core';
import  { faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis'
import  { faPen} from '@fortawesome/free-solid-svg-icons/faPen'
import  { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import  { faFilm} from '@fortawesome/free-solid-svg-icons/faFilm'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  faEllipsis = faEllipsis;
  faPen = faPen;
  faPlus = faPlus;
  faFilm = faFilm;

  array = [
    1,2,3,4,5,6,7
  ]

  arr = [
    1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    1,2,3,4,5,6,7,8,9,10,11,12,13,14
  ]
}
