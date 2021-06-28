import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/main';
import { HttpClient } from '@angular/common/http'
import { Page } from '../model/Page';
import { map, catchError } from "rxjs/operators";
import { Person } from '../model/person';
import { Pageable } from '../model/Pageable';
import { PageableResponse } from '../model/PageableResponse';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonService {
  person: any
  url = `${URL_API}` + "person"
  error: any;
  constructor(private http: HttpClient) { }

  createPerson(data: any): Observable<any> {
    return this.http.post(this.url, data).pipe(
      map((obj) => obj),
      catchError((e) => this.error = this.error)
    )
  }

  updatePerson(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  removePerson(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }


  getAllPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  findAll(pageable: Pageable): Observable<PageableResponse> {
    var pagebleParameter = `?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort},${pageable.direction}`
    var url = this.url + `${pagebleParameter}`
    return this.http.get<PageableResponse>(url).pipe(
      map((obj) => obj),
    ).pipe(
      map((obj) => this.person = obj),

    );

  }
}
