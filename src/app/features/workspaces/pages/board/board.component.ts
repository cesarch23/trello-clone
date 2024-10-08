import { Component } from '@angular/core';
import { faEllipsis,
          faPen,faPlus,
          faFilm, faX
        } from '@fortawesome/free-solid-svg-icons'
 

import { List } from 'src/app/shared/interfaces/list.interface';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { CardDialogComponent } from '../../component/card-dialog/card-dialog.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  faEllipsis = faEllipsis;
  faPen = faPen;
  faPlus = faPlus;
  faFilm = faFilm;
  faX=faX;
  listTitle = new FormControl<string>("",{ validators: Validators.required,nonNullable:true});
  constructor (
                public cardDialog:Dialog )
                {}
  
  isClicked:boolean = false;
  keyPressAddTocard:boolean = false;

  myList:List[] = [
    {
      title:'do',
      cards:[ 
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Stay updated with industry news', 
          coverWithImg:'https://images.unsplash.com/photo-1721041011353-298585b7c8f6?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Stay updated with industry news', 
          coverWithImg:'https://images.unsplash.com/photo-1721041011353-298585b7c8f6?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
       
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book read a book ', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Read a book', 
          coverWithColor:'#ffdcb8'
        }
       ],
      isAchived:false,
    },
    {
      title:'doing',
      cards:[ 
        { title:'Check and respond to emails', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects ', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        },
        { title:'Complete assigned tasks or projects', 
          coverWithColor:'#fff'
        }
       ],
      isAchived:false,
    },
    {
      title:'done',
      cards:[ 
        { title:'Watch a movie', 
          coverWithColor:'#ffdcb8'
        },
        { title:'Plan a weekend getaway', 
          coverWithColor:'#fff'
        }
       ],
      isAchived:false,
    }
  ]

  changeBackground(card:Card){
    if(card.coverWithColor) return `background-color:${card.coverWithColor};`;
    if(card.coverWithImg) 
      return `
        background-image: url('${card.coverWithImg}');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
          `;

    return '#fff'
  }
  drop(event:CdkDragDrop<Card[]>){
    console.log(event);
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex,event.currentIndex);
      //array: Card[], fromIndex: number, toIndex: number
    }
    else{
      transferArrayItem(
        event.previousContainer.data,// current array
        event.container.data,//target array
        event.previousIndex,//currentindex
        event.currentIndex //targetindex
      );
    }

  }

  toggleButton(){
    this.isClicked=!this.isClicked;
    
  }
  addList(){
    
    if(this.listTitle.untouched) return this.listTitle.markAllAsTouched();
    if(this.listTitle.valid){
      this.myList.push(
        {
          title: this.listTitle.value,
          cards:[],
          isAchived:false
        }
      )
      return this.listTitle.reset();
    }
  
    return window.alert(" ingrese un valor valido")
  }
  addCard(index:number){

  }
  toggleFormAddCard(event:Event,i:number){
       
  }

  openCardDialog(card:Card, listTitle:String){
    this.cardDialog.open(CardDialogComponent,{
      // minWidth:'200px',
      // maxWidth:'800px',
      // maxHeight:'600px'
      data:{
        card:card,
        list:listTitle
      }
    })
  }




}
