import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { RequestsService } from '../../services/requests.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private requestsService: RequestsService, private authService: AuthService) { }

  ngOnInit() {
  }

  onUpdateData() {
    
    this.requestsService.updateData().subscribe(
      (response: Response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onFetchData() {
    this.requestsService.fetchData()
  }

  onLogout() {
    this.authService.logoutUser()
  }

  isAuthenticated() {
    return this.authService.isAuthenticated()
  }

}
