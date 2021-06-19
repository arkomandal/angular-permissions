import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  
  private currentPermissions: BehaviorSubject<string[]> = new BehaviorSubject(["ADMIN"]);
  
  constructor() { }

  setCurrentPermissions(data) {
    this.currentPermissions.next(data);
  }
  
  getCurrentPermissions() {
    return this.currentPermissions.asObservable();
  }

}
