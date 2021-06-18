import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  
  private current_permissions: BehaviorSubject<string[]> = new BehaviorSubject(["ADMIN"]);
  
  constructor() { }

  set_current_permissions(data) {
    this.current_permissions.next(data);
  }
  
  get_current_permissions() {
    return this.current_permissions.asObservable();
  }

}
