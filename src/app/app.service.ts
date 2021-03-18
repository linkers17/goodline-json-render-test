import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {DataInterface} from './data.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dataUrl = environment.DATA_URL;

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(this.dataUrl);
  }
}
