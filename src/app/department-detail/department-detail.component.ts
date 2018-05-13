import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <a class="btn" (click)="goPrivous()">Previous</a>
    <a class="btn" (click)="goNext()">Next</a>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styleUrls: ['../app.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrivous(){
    let priviousId = this.departmentId - 1;
    this.router.navigate(['/department', priviousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
        this.router.navigate(['/department', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/department',{id: selectedId, test: 'testvalue'}]);
  }

}
