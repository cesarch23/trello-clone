import { Component } from '@angular/core';
import  { faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis'
import  { faPen} from '@fortawesome/free-solid-svg-icons/faPen'
import  { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import  { faFilm} from '@fortawesome/free-solid-svg-icons/faFilm'
import { List } from 'src/app/shared/interfaces/list.interface';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  myList:List[] = [
    {
      title:'do',
      cards:[ 
        { title:'Practice mindfulness', 
          coverWithColor:'#fff'
        },
        { title:'Stay updated with industry news', 
          coverWithImg:'https://images.unsplash.com/photo-1721041011353-298585b7c8f6?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
}
