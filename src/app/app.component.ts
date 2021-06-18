import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { Subscription } from 'rxjs';
import { PermissionService } from './services/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subs: Subscription[] = [];

  constructor(
    private ngxPermissionsService: NgxPermissionsService,
    private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    let sub = this.permissionService.get_current_permissions().subscribe((permissions: string[]) => {
      console.log('receiving permissions: ', permissions)
      this.ngxPermissionsService.loadPermissions(permissions);
    });
    this.subs.push(sub);
  }

  ngOnDestroy() {
    for (let sub of this.subs) sub.unsubscribe();
  }

}
