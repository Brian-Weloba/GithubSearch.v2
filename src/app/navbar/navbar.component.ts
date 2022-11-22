import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  username: string ='';
  subscription: Subscription | undefined ;

  constructor(private userService: UserService, private data: DataService) {
  }

  ngOnInit() {
    this.subscription = this.data.currentUsername.subscribe(username => this.username = username)
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }


  searchUsers(username: string) {
    this.data.changeUsername(username)
    this.userService.searchUser(this.username)
    console.log(this.username)
  }


}
