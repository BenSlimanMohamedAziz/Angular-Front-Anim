import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from './services/animal.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MesAnimaux';
  constructor (public authService: AuthService, private router : Router) {}
  ngOnInit () {
    let isloggedin:string | null;
    let loggedUser:string | null;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  onLogout(){
this.authService.logout();
  }

}
