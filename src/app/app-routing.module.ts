import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {path: '', component: DepartmentListComponent},
  { path: "", redirectTo: "/departments", pathMatch: "full" },
  { path: "departments", component: DepartmentListComponent },
  {
    path: "departments/:id",
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
];
