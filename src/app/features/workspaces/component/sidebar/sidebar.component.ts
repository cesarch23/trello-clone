import { Component } from '@angular/core';
import { faTrello  } from '@fortawesome/free-brands-svg-icons/faTrello'
import { faUser  } from '@fortawesome/free-solid-svg-icons/faUser'
import { faCog  } from '@fortawesome/free-solid-svg-icons/faCog'
import { faChevronLeft  } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faTable  } from '@fortawesome/free-solid-svg-icons/faTable'
import { faCalendarAlt  } from '@fortawesome/free-solid-svg-icons/faCalendarAlt'
import { faPlus  } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEllipsis  } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faStar  } from '@fortawesome/free-solid-svg-icons/faStar'

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
