import { Component, OnInit } from '@angular/core';
import { Board } from '../../interfaces/board.interface';
import { faArrowUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faChevronRight  } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faUserGroup  } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { AuthService } from 'src/app/core/services/auth.service';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faArrowUpRight=faArrowUpRightFromSquare;
  faChevronRight= faChevronRight;
  faUserGroup=faUserGroup;
  easy:boolean = false;
  user:Profile | null =null;

  isOpenOverlayProfile:boolean = false;
  isOpenOverlayWorkspaces:boolean=false;
  isOpenOverlayRecents:boolean=false;
  isOpenOverlayStarred:boolean=false;
  isOpenOverlayTemplate:boolean=false;

  arrTemplates=[
    {
      id:1,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'Go to market strategy template marketing'
    },
    {
      id:2,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'company overview'
    },
    {
      id:3,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'design huddle'
    },
    {
      id:4,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'kamban template'
    },
    {
      id:5,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'project management'
    },
    {
      id:6,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'simple project board'
    },
    {
      id:7,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'simple project board'
    },
    {
      id:8,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'simple project board'
    },
    {
      id:9,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'simple project board'
    },
    {
      id:10,
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'simple project board'
    },
    {
      id:11,
      image:'https://images.unsplash.com/photo-1719512867124-9ea3bc4d8f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzIwOTg3ODg2fA&ixlib=rb-4.0.3&q=80&w=400',
      title:'Remote team meeting'
    },
    {
      id:12,
      image:'https://images.unsplash.com/photo-1719512867124-9ea3bc4d8f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzIwOTg3ODg2fA&ixlib=rb-4.0.3&q=80&w=400',
      title:'Remote team meeting'
    }
    ,
    {
      id:13,
      image:'https://images.unsplash.com/photo-1719512867124-9ea3bc4d8f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNzIwOTg3ODg2fA&ixlib=rb-4.0.3&q=80&w=400',
      title:'Remote team meeting'
    }
  ]
  arrRecents:Board[] = [
    {
      id:"5Qu5t4Ka",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/963ddbe30ac0e2ab51ed5ed7403a5143/photo-1523266092241-0077129f31fe.jpg',
      title:'New Tab',
      workspaceName: "Cesar Choccata's Workspace",
      starred:true
    },
    {
      id:"5Qu5t4Kb",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'New Tab',
      workspaceName: "Marco Aurelio Denegri's Workspace",
      starred:false
    },
    {
      id:"5Qu5t4Kc",
      name:"new-tab",
      image:'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
      title:'New Tab',
      workspaceName: "Diego Baltazar's Workspace",
      starred:true
    }
  ] 
  arrStarred = this.arrRecents.filter(board=>board.starred)

  constructor(
    private authService:AuthService,
  ){
     
  }
  ngOnInit(): void {
    this.authService.profile$.subscribe(resp=>this.user=resp);
    
  }

  toggleProfile(){
    this.isOpenOverlayProfile= !this.isOpenOverlayProfile;
  }
  toggleWorkspaces(){
    this.isOpenOverlayWorkspaces=!this.isOpenOverlayWorkspaces;
  }
  toggleStarred(){
    this.isOpenOverlayStarred=!this.isOpenOverlayStarred
  }
  toggleRecents(){
    this.isOpenOverlayRecents=!this.isOpenOverlayRecents
  }
  toggleTemplate(){
    this.isOpenOverlayTemplate=!this.isOpenOverlayTemplate
  }
  logout(){
    this.authService.logout();
    window.location.reload();
  }
  
   

}
