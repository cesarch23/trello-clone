import { Component } from '@angular/core';
import { faAngleDown,faAngleUp,
         faHeart,faSquare,
         faTableCellsLarge,
         faUserGroup, faGear,
         faAngleRight, faPlus,
         faWaveSquare
        } from '@fortawesome/free-solid-svg-icons'

import { faTrello } from '@fortawesome/free-brands-svg-icons/faTrello'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faSquare=faSquare;
  faTable=faTableCellsLarge;
  faGroup=faUserGroup;
  faGear=faGear;
  faAngleRight=faAngleRight;
  faPlus=faPlus;
  faWave=faWaveSquare;
  faTrello=faTrello;

}
