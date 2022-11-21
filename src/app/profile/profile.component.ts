import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: User;

  constructor(private http:HttpClient) {
    this.user = new User('','','','','','','','','','','','');
  }

  ngOnInit():void {
    this.searchUser('brian-weloba');
  }

  searchUser(username:string) {
    var header= {
      headers : new HttpHeaders()
        .set('Authorization', 'Bearer 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')
    }
    return new Promise<void>((resolve, reject) => {
      firstValueFrom(this.http.get<any>('https://api.github.com/users/' + username,header)).then(
        (results: User) => {
          // console.log(results)
          this.user = results;
          resolve()
        },
        (error: any) => {
          console.log(error);
          reject();
        }
      )
    });
  }

}
