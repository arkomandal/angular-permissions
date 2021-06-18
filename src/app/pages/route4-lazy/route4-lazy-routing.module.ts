import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route4LazyComponent } from './route4-lazy.component';

const routes: Routes = [{ path: '', component: Route4LazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route4LazyRoutingModule { }
