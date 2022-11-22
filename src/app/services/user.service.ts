import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', '', '', '', '', '', '', '', '');

  }

  searchUser(username: string) {
    // var header= {
    //   headers : new HttpHeaders()
    //     .set('Authorization', 'Bearer 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')
    // }
    return new Promise<void>((resolve, reject) => {
      firstValueFrom(this.http.get<any>('https://api.github.com/users/' + username)).then(
        (results: User) => {
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
