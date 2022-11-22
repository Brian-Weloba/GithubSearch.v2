import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Repo} from "../repo";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repos: Repo[] = [];

  constructor(private http: HttpClient) {
  }

  searchRepos(username: string) {
    const fetchParent = (url: any, repo: Repo) => {
      return new Promise<void>((resolve, reject) => {
        firstValueFrom(this.http.get<any>(url)).then(
          (result) => {
            repo.fork_owner = result.parent.owner.login;
            repo.fork_name = result.parent.name;
            // console.log('repo :: ')
            // console.log(result.parent.owner.login)
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
          // this.totalRepos = results.length;
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
