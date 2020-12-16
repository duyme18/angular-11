import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public id = 0;
  public studentForm = new FormGroup({
    code: new FormControl(''),
    gender: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture: new FormControl(''),
  });

  constructor(private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    const newStudent: any = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    this.serverHttp.addStudent(newStudent).subscribe((data) => {
      console.log(data);
      this.router.navigate(['students']);
    })
  }
}
