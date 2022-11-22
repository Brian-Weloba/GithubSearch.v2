import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usernameSource = new BehaviorSubject('brian-weloba');
  currentUsername = this.usernameSource.asObservable();

  constructor() {
  }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}
