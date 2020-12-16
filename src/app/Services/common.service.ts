import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 20;
  public totalStudents = 0;
  constructor() { }

  public tangTuoi() {
    this.age++;
  }
}
