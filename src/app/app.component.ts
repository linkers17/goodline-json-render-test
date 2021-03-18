import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {DataInterface} from './data.interface';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'goodline-test';
  data$: Observable<DataInterface[] | null> = of(null);

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.data$ = this.appService.getData();
  }
}
