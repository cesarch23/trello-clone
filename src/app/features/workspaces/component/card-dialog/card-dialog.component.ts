import {DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject,    } from '@angular/core';
import { Card                  } from 'src/app/shared/interfaces/card.interface';
import {  faClock,faSquare,
          faUser,faImage,
          faCopy,              } from '@fortawesome/free-regular-svg-icons'
import { faXmark,faHardDrive, 
         faEye,faBarsStaggered,
         faPlus,faListUl, 
         faPaperclip,faTags,
         faArrowRight,faClone,
         faBoxArchive,faShareNodes,
         faSquareCheck         } from '@fortawesome/free-solid-svg-icons'
         

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent {

  faXmark= faXmark;
  faHardDrive= faHardDrive;
  faEye= faEye;
  faBarsStaggered= faBarsStaggered;
  faPlus= faPlus;
  faListUl= faListUl;
  faUser= faUser;
  faTags= faTags;
  faSquareCheck= faSquareCheck;
  faClock= faClock;
  faPaperclip= faPaperclip;
  faImage= faImage;
  faArrowRight= faArrowRight;
  faCopy= faCopy;
  faClone= faClone;
  faBoxArchive= faBoxArchive;
  faShareNodes= faShareNodes;
  faSquare= faSquare;
  
  constructor(@Inject(DIALOG_DATA) public data:{card:Card, list:String}, public dialogRef:DialogRef){
     
  }
  closeDialog(){
    this.dialogRef.close();
  }

  
}
