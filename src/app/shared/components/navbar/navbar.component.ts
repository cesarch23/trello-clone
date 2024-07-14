import { Component } from '@angular/core';
import { faArrowUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faUserGroup  } from '@fortawesome/free-solid-svg-icons/faUserGroup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faArrowUpRight=faArrowUpRightFromSquare;
  faChevronRight= faChevronRight;
  faUserGroup=faUserGroup;

  isOpenOverlayProfile:boolean = false;
  isOpenOverlayWorkspaces=false;

}
