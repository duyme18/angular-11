import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';
import * as lodash from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];

  constructor(private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.serverHttp.getStudents().subscribe((data) => {
      this.students = data;
      this.common.setTotalStudents(data.length);
    });
  }

  public addStudent() {
    this.router.navigate(['student-form', 0]);
  }

  public deleteStudent(studentId: any) {
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      this.loadData();
    });
  }

  public editStudent(studentId: any) {
    this.router.navigate(['student-form', studentId]);
  }

  public sortByCode(dir: string) {
    if (dir === "up") {
      this.students = lodash.orderBy(this.students, ['code'], ['desc']);
    } else if (dir === "down") {
      this.students = lodash.orderBy(this.students, ['code'], ['asc']);
    }
  }
}
