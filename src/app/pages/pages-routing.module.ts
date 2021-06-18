import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'r1',
    component: Route1Component,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'USER']
      }
    }
  },
  {
    path: 'r2', component: Route2Component,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN', 'USER']
      }
    }
  },
  {
    path: 'r3', component: Route3Component,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        // only: 'ADMIN',
        except: ['USER', 'SOMEONE_ELSE'],
        // redirectTo: '/'
      }
    }
  },
  // {
  //   path: 'r4',
  //   loadChildren: () => import('./route4-lazy/route4-lazy.module').then(m => m.Route4LazyModule),
  //   canLoad: [NgxPermissionsGuard],
  //   data: {
  //     permissions: {
  //       only: 'SOMEONE_ELSE',
  //       redirectTo: '/'
  //     }
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }