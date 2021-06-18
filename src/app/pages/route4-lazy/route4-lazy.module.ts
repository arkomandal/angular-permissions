import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4LazyRoutingModule } from './route4-lazy-routing.module';
import { Route4LazyComponent } from './route4-lazy.component';


@NgModule({
  declarations: [Route4LazyComponent],
  imports: [
    CommonModule,
    Route4LazyRoutingModule
  ]
})
export class Route4LazyModule { }
