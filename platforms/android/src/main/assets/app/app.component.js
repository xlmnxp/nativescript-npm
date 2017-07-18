"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AppComponent = (function () {
    function AppComponent() {
        this.packages = new BehaviorSubject_1.BehaviorSubject([]);
    }
    AppComponent.prototype.onClear = function () {
        this.packages.next([]);
    };
    AppComponent.prototype.onTextChanged = function ($event) {
        var _this = this;
        var searchBar = $event.object;
        fetch("https://www.npmjs.com/-/search?text=" + encodeURIComponent(searchBar.text) + "&quality=1.95&popularity=3.3&maintenance=2.05")
            .then(function (r) { return r.json(); })
            .then(function (r) {
            var results = r["objects"].sort(function (a, b) {
                return b.searchScore - a.searchScore;
            });
            _this.packages.next(results);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0RBQXVEO0FBT3ZELElBQWEsWUFBWTtJQUVyQjtRQURPLGFBQVEsR0FBeUIsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR2hFLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxNQUFNO1FBQXBCLGlCQVVDO1FBVEcsSUFBSSxTQUFTLEdBQWMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxLQUFLLENBQUMseUNBQXVDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0RBQStDLENBQUM7YUFDOUgsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNuQixJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxPQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVc7WUFBN0IsQ0FBNkIsQ0FDaEMsQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7O0dBRVcsWUFBWSxDQXFCeEI7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgcHVibGljIHBhY2thZ2VzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBvbkNsZWFyKCl7XG4gICAgICAgIHRoaXMucGFja2FnZXMubmV4dChbXSk7XG4gICAgfVxuXG4gICAgb25UZXh0Q2hhbmdlZCgkZXZlbnQpe1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj4kZXZlbnQub2JqZWN0O1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cubnBtanMuY29tLy0vc2VhcmNoP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoQmFyLnRleHQpfSZxdWFsaXR5PTEuOTUmcG9wdWxhcml0eT0zLjMmbWFpbnRlbmFuY2U9Mi4wNWApXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSByW1wib2JqZWN0c1wiXS5zb3J0KChhLCBiKSA9PiBcbiAgICAgICAgICAgICAgICBiLnNlYXJjaFNjb3JlIC0gYS5zZWFyY2hTY29yZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucGFja2FnZXMubmV4dChyZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19