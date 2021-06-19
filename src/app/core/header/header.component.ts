import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface IRoutes {
  path: string,
  name: string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subs: Subscription[] = [];
  currentRoute: string = '';
  routes: IRoutes[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/r1',
      name: 'Route 1'
    },
    {
      path: '/r2',
      name: 'Route 2'
    },
    {
      path: '/r3',
      name: 'Route 3'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

}
