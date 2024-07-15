import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { Board } from 'src/app/shared/interfaces/board.interface';
@Component({
  selector: 'app-recents-starred',
  templateUrl: './recents-starred.component.html',
  styleUrls: ['./recents-starred.component.css']
})
export class RecentsStarredComponent {
  faStar=faStar;
  @Input() boards: Board[]=[];
}
