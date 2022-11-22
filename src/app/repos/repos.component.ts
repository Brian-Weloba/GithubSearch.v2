import {Component, OnInit} from '@angular/core';
import {Repo} from "../repo";
import {Subscription} from "rxjs";
import {RepoService} from "../services/repo.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Repo[] = [];
  p: number = 1;
  itemsPerPage: number = 8;
  totalRepos: any;
  autoHide: boolean = true;
  subscription: Subscription | undefined;

  constructor(private repoService: RepoService, private data: DataService) {
  }

  ngOnInit() {
    this.subscription = this.data.currentUsername.subscribe(username => this.searchRepos(username));
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

  private searchRepos(username: string) {
    this.repoService.searchRepos(username).then(
      () => {
        this.repos = this.repoService.repos;
        this.totalRepos = this.repos.length;
      },
      (error) => {
        console.log(error)
      }
    )

  }

}
