import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: '', component: DepartmentListComponent},
  {path: '', redirectTo: '/department', pathMatch: 'full'},
  {path: 'department', component: DepartmentListComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent
];
