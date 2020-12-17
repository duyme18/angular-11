import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

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
    this.router.navigate(['student-form']);
  }

  public deleteStudent(studentId: any) {
    this.serverHttp.deleteStudent(studentId).subscribe((data) => {
      this.loadData();
    });
  }
}
