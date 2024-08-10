import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-workspaces-layout',
  templateUrl: './workspaces-layout.component.html',
  styleUrls: ['./workspaces-layout.component.css']
})
export class WorkspacesLayoutComponent implements OnInit {

  constructor(
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    this.authService.getProfile().subscribe()
  }
}
