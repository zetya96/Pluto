import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
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
  private common: MenuItem[] = [
    {link: '/rooms', title: 'Rooms'}
  ];

  menus: MenuItem[] = [
    {link: '/createcourse' ,title:'Kurzus létrehozása'}
  ]

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {  }
  logout() {
    this.authService.logout().subscribe(
      res => this.router.navigate(['/login']),
      err => err
    );
  }

}
