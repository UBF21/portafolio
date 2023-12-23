import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { GithubRepoService } from 'src/app/services/github-repo.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  repos: any[] = [];
  isLoading:boolean = true;

  constructor(private githubService: GithubRepoService) { }

  ngOnInit(): void {
    this.githubService.getRepos()
      .pipe(delay(2000))
      .subscribe(
        {
          next: (response) => {
            this.isLoading = false; 
            this.repos = response;
          },
          error: (error) => { console.log(error) }
        }
        );
  }

}
