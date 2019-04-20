import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'survey';
  errorMsg: string;
  data: object;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.data = data;
      },
      (error) => {
        this.errorMsg = error as any;
      }
    );

  }
}
