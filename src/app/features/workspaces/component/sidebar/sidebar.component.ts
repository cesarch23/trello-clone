import { Component } from '@angular/core';
import { faTrello  } from '@fortawesome/free-brands-svg-icons/faTrello'
import { faUser,faCog,
         faChevronLeft,
        faChevronDown,
        faTable,
        faCalendarAlt,
        faPlus,
        faEllipsis,faStar
        } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faTrello=faTrello;
  faUser=faUser;
  faCog=faCog;
  faChevronLeft=faChevronLeft;
  faChevronDown=faChevronDown;
  faTable=faTable;
  faCalendarAlt=faCalendarAlt;
  faPlus=faPlus;
  faEllipsis=faEllipsis;
  faStar=faStar;


  isCollapsed:boolean = false;
  toggleSidebar(){
    this.isCollapsed=!this.isCollapsed;
  }
   
}
