"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PackageComponent = (function () {
    function PackageComponent(route) {
        // npmAPI.getdetails(this.name, r =>{
        //   this.package.next(r);
        // })
        this.route = route;
        this.package = new BehaviorSubject_1.BehaviorSubject({});
    }
    PackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.route.snapshot.params['name'];
        this.package.next({});
        fetch("http://registry.npmjs.org/" + encodeURIComponent(this.name) + "/latest")
            .then(function (r) { return r.json(); })
            .then(function (r) {
            _this.package.next(r);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWNrYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsd0RBQXVEO0FBTXZELElBQWEsZ0JBQWdCO0lBYTNCLDBCQUFtQixLQUFxQjtRQUN0QyxxQ0FBcUM7UUFDckMsMEJBQTBCO1FBQzFCLEtBQUs7UUFIWSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVhqQyxZQUFPLEdBQXlCLElBQUksaUNBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQWdCcEUsQ0FBQztJQWZELG1DQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQywrQkFBNkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFTLENBQUM7YUFDekUsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNuQixJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBU0gsdUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGdCQUFnQjtJQUo1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGdDQUFnQztLQUM5QyxDQUFDO3FDQWMwQix1QkFBYztHQWI3QixnQkFBZ0IsQ0FvQjVCO0FBcEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBhY2thZ2UnLFxuICB0ZW1wbGF0ZVVybDogYC4vdmlld3MvcGFja2FnZS5jb21wb25lbnQuaHRtbGBcbn0pXG5leHBvcnQgY2xhc3MgUGFja2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcHVibGljIG5hbWU6c3RyaW5nO1xuICBwdWJsaWMgcGFja2FnZTogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe30pOyBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ25hbWUnXTtcbiAgICB0aGlzLnBhY2thZ2UubmV4dCh7fSk7XG4gICAgZmV0Y2goYGh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvJHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5uYW1lKX0vbGF0ZXN0YClcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgIC50aGVuKHIgPT4ge1xuICAgICAgdGhpcy5wYWNrYWdlLm5leHQocik7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgLy8gbnBtQVBJLmdldGRldGFpbHModGhpcy5uYW1lLCByID0+e1xuICAgIC8vICAgdGhpcy5wYWNrYWdlLm5leHQocik7XG4gICAgLy8gfSlcblxuICB9XG4gIFxufSJdfQ==