import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons = [
    {
      name: "Admin",
      value: ["ADMIN"]
    },
    {
      name: "User",
      value: ["USER"]
    },
    {
      name: "Someone Else",
      value: ["SOMEONE_ELSE"]
    }
  ]
  permissions = new FormGroup({
    person: new FormControl('["ADMIN"]'),
  });

  constructor(private permissionService: PermissionService) { }

  ngOnInit(): void {
    this.permissions.get('person').valueChanges.subscribe((permission: string[]) => {
      this.permissionService.set_current_permissions(permission);
    });
  }

}
