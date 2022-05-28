import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayData : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let display = this.http.get('http://localhost:5000/employee');
    display.subscribe((data) => this.displayData = data);
  }

}
