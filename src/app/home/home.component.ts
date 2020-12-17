import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = "Duy";
  public age = 24;
  public vehicles = ['Toyota', 'Honda'];

  constructor(private common: CommonService) {
  }

  ngOnInit(): void {
  }

  public tangTuoi() {
  }
}
