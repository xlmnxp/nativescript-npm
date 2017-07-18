import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'ns-package',
  templateUrl: `./views/package.component.html`
})
export class PackageComponent implements OnInit{
  public name:string;
  public package: BehaviorSubject<any> = new BehaviorSubject<any>({}); 
  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  constructor(public route: ActivatedRoute) {
    // npmAPI.getdetails(this.name, r =>{
    //   this.package.next(r);
    // })
  }
  
}