"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PackageComponent = (function () {
    function PackageComponent(route) {
        this.route = route;
        this.package = new BehaviorSubject_1.BehaviorSubject({});
        // npmAPI.getdetails(this.name, r =>{
        //   this.package.next(r);
        // })
    }
    PackageComponent.prototype.ngOnInit = function () {
        this.name = this.route.snapshot.params['name'];
    };
    return PackageComponent;
}());
PackageComponent = __decorate([
    core_1.Component({
        selector: 'ns-package',
        templateUrl: "./views/package.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], PackageComponent);
exports.PackageComponent = PackageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWNrYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsd0RBQXVEO0FBTXZELElBQWEsZ0JBQWdCO0lBTzNCLDBCQUFtQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUxqQyxZQUFPLEdBQXlCLElBQUksaUNBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQU1sRSxxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLEtBQUs7SUFDUCxDQUFDO0lBUkQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFRSCx1QkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksZ0JBQWdCO0lBSjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsZ0NBQWdDO0tBQzlDLENBQUM7cUNBUTBCLHVCQUFjO0dBUDdCLGdCQUFnQixDQWE1QjtBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBhY2thZ2UnLFxuICB0ZW1wbGF0ZVVybDogYC4vdmlld3MvcGFja2FnZS5jb21wb25lbnQuaHRtbGBcbn0pXG5leHBvcnQgY2xhc3MgUGFja2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIG5hbWU6c3RyaW5nO1xuICBwdWJsaWMgcGFja2FnZTogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pOyBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ25hbWUnXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAvLyBucG1BUEkuZ2V0ZGV0YWlscyh0aGlzLm5hbWUsIHIgPT57XG4gICAgLy8gICB0aGlzLnBhY2thZ2UubmV4dChyKTtcbiAgICAvLyB9KVxuICB9XG4gIFxufSJdfQ==