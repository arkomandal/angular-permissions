import { Component, OnInit } from '@angular/core';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  permissions = [
    {
      name: "Admin",
      value: ["ADMIN"]
    },
    {
      name: "User",
      value: ["USER"]
    },
    {
      name: "Guest",
      value: ["GUEST"]
    }
  ]
  currentPermission = "Admin";

  constructor(private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.permissionService.getCurrentPermissions().subscribe((permission: string[]) => {
      this.currentPermission = this.permissions.find(el => el.value[0] == permission[0]).name;
    });
  }

  onPermissionChange() {
    let permission = this.permissions.find(el => el.name == this.currentPermission).value;
    this.permissionService.setCurrentPermissions(permission);
  }

}
