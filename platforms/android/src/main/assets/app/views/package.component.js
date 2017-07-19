"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PackageComponent = (function () {
    function PackageComponent(route) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWNrYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFDakQsd0RBQXVEO0FBTXZELElBQWEsZ0JBQWdCO0lBYTNCLDBCQUFtQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVhqQyxZQUFPLEdBQXlCLElBQUksaUNBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztJQVd4QixDQUFDO0lBVjdDLG1DQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQywrQkFBNkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFTLENBQUM7YUFDekUsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNuQixJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUgsdUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGdCQUFnQjtJQUo1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGdDQUFnQztLQUM5QyxDQUFDO3FDQWMwQix1QkFBYztHQWI3QixnQkFBZ0IsQ0FlNUI7QUFmWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1wYWNrYWdlJyxcbiAgdGVtcGxhdGVVcmw6IGAuL3ZpZXdzL3BhY2thZ2UuY29tcG9uZW50Lmh0bWxgXG59KVxuZXhwb3J0IGNsYXNzIFBhY2thZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHB1YmxpYyBuYW1lOnN0cmluZztcbiAgcHVibGljIHBhY2thZ2U6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTsgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWyduYW1lJ107XG4gICAgdGhpcy5wYWNrYWdlLm5leHQoe30pO1xuICAgIGZldGNoKGBodHRwOi8vcmVnaXN0cnkubnBtanMub3JnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubmFtZSl9L2xhdGVzdGApXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAudGhlbihyID0+IHtcbiAgICAgIHRoaXMucGFja2FnZS5uZXh0KHIpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG4gIFxufSJdfQ==