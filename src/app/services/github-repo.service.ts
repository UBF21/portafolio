import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any[]> {
    const headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${environment.TOKEN_GITHUB}`);
    return this.http.get<any[]>(`${environment.BASE_URL}/users/${environment.USER}/repos`, { headers });
  }
}
