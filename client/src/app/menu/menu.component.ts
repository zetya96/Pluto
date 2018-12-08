import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";

interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

  menus: MenuItem[] = [
    {link: '/me', title:'Saját profil'},
    {link: '/courses' ,title:'Kurzusok'},
    {link: '/createcourse' ,title:'Kurzus létrehozása'},
    {link: 'users',title:'Felhasználók'}
  ]

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {  }
  logout() {
    this.authService.logout();
    this.router.navigate['login'];
  }

}
