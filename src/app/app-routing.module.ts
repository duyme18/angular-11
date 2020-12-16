import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'dashboard', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'students', component: StudentsComponent
  },
  {
    path: 'student-form', component: StudentFormComponent
  },
  // {
  //   path: 'form', component: FormComponent
  // },
  // {
  //   path: 'reactiveform', component: ReactiveFormComponent
  // },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
