import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {
  private idSource = new BehaviorSubject<string>('');
  private roleSource = new BehaviorSubject<string>('');

  id$ = this.idSource.asObservable();
  role$ = this.roleSource.asObservable();

  setId(id: string) {
    this.idSource.next(id);
  }

  setRole(role: string) {
    this.roleSource.next(role);
  }
}
