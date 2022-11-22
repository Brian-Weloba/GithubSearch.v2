import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  subscription: Subscription | undefined;

  constructor(private userService: UserService, private data: DataService) {
    this.user = new User('', '', '', '', '', '', '', '', '', '', '', '');

  }

  ngOnInit() {
    this.subscription = this.data.currentUsername.subscribe(username => this.searchUser(username))
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

  private searchUser(username: string) {
    this.userService.searchUser(username).then(
      () => {
        this.user = this.userService.user;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
