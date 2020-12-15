import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age = '';
  public name = '';
  public comments: any;

  constructor(private common: CommonService,
    private serverHttp: ServerHttpService) {
    // this.age = common.age;
  }
  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.age = data.age;
    });
    this.serverHttp.getComments().subscribe((data) => {
      console.log('comments', data);
      this.comments = data;
    })
  }
  public tangTuoi() {
    // this.common.age++;
    // this.age = this.common.age;
  }
}
