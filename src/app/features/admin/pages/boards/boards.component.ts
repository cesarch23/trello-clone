import { Component } from '@angular/core';
import { Board } from 'src/app/shared/interfaces/board.interface';
import { faStar, faClock,
         faFileClipboard,
         faTableCellsLarge,
         faUser, faGear,
         faBox, faInfoCircle,
         faUserGroup
        } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  faStar=faStar;
  faClock=faClock;
  faFile=faFileClipboard;
  faBox=faTableCellsLarge;
  faUser=faUser;
  faGear=faGear;
  faPro=faBox;
  faInfoCircle=faInfoCircle;
  faUserGroup=faUserGroup;

  arrRecents:Board[] = [
    {

      id:"aNwhVJ1u",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/963ddbe30ac0e2ab51ed5ed7403a5143/photo-1523266092241-0077129f31fe.jpg',
      title:'New Tab',
      workspaceName: 'Cesar Choccata Workspace',
      starred:true
    },
    {
      id:"aNwhVJ1a",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'New Tab',
      workspaceName: 'Marco Aurelio Denegri Montes Workspace',
      starred:false
    },
    {
      id:"aNwhVJ1b",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'New Tab',
      workspaceName: 'Diego Baltazar Rodriguez Workspace',
      starred:true
    },
    {
      id:"aNwhVJ1c",
      name:"covid-20-sistemas-distribuidos",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'COVID-20 Sistemas Distribuidos',
      workspaceName: 'Diego Baltazar Rodriguez Workspace',
      starred:true
    }
  ] 
  arrStarred = this.arrRecents.filter(board=>board.starred)
}
