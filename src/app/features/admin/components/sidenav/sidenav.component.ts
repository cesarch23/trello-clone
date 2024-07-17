import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons/faTableCellsLarge'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons/faWaveSquare'
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
