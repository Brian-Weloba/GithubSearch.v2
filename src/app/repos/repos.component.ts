import {Component, OnInit} from '@angular/core';
import {Repo} from "../repo";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Repo[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.searchRepos('brian-weloba');
  }

  private searchRepos(username: string) {
    const fetchParent = (url: any, repo: Repo) => {
     return new Promise<void>((resolve, reject) => {
        firstValueFrom(this.http.get<any>(url)).then(
          (result) => {
            repo.fork_owner = result.parent.owner.login;
            repo.fork_name = result.parent.name;
            console.log('repo :: ')
            console.log(result.parent.owner.login)
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        )
      });
    }

    return new Promise<void>((resolve, reject) => {
      this.http.get<any>('https://api.github.com/users/' + username + '/repos').toPromise().then(
        (results) => {
          this.repos = results;
          // this.repos.push(results);
          // console.log(this.repos);
          for (let i = 0; i < this.repos.length; i++) {
            if (this.repos[i].fork) {
              fetchParent(this.repos[i].url, this.repos[i]);
            }
          }
          // console.log(this.repos);
          resolve()
        },
        (error) => {
          console.log(error);
          reject();
        }
      )
    });
  }
}
