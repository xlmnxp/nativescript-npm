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
    this.package.next({});
    fetch(`http://registry.npmjs.org/${encodeURIComponent(this.name)}/latest`)
    .then(r => r.json())
    .then(r => {
      this.package.next(r);
    });
  }

  constructor(public route: ActivatedRoute) { }
  
}