import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-boards-layout',
  templateUrl: './boards-layout.component.html',
  styleUrls: ['./boards-layout.component.css']
})
export class BoardsLayoutComponent implements OnInit{
  constructor (
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    this.authService.getProfile().subscribe();
  }
}
