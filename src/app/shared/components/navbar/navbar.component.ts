import { Component } from '@angular/core';
import { faArrowUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faUserGroup  } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { Board } from '../../interfaces/board.interface';

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
  isOpenOverlayWorkspaces:boolean=false;
  isOpenOverlayRecents:boolean=false;
  isOpenOverlayStarred:boolean=false;


  arrRecents:Board[] = [
    {
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/6ff58cbbf78d56346573b6468313dd56/photo-1720247522780-db8ba86cbfef.webp',
      title:'New Tab',
      workspaceName: 'Cesar Choccata Workspace',
      starred:true
    },
    {
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/6ff58cbbf78d56346573b6468313dd56/photo-1720247522780-db8ba86cbfef.webp',
      title:'New Tab',
      workspaceName: 'Marco Aurelio Denegri Montes Workspace',
      starred:false
    },
    {
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/6ff58cbbf78d56346573b6468313dd56/photo-1720247522780-db8ba86cbfef.webp',
      title:'New Tab',
      workspaceName: 'Diego Baltazar Rodriguez Workspace',
      starred:true
    }
  ] 
  arrStarred = this.arrRecents.filter(board=>board.starred)

}
