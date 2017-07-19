"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        this.packages = new BehaviorSubject_1.BehaviorSubject([]);
    }
    MainComponent.prototype.onClear = function () {
        this.packages.next([]);
    };
    MainComponent.prototype.onPackage = function ($event) {
        this.router.navigate(['/package', this.packages.getValue()[$event.index]['package']['name']]);
    };
    MainComponent.prototype.onTextChanged = function ($event) {
        var _this = this;
        var searchBar = $event.object;
        var newQuery = new Date();
        this.lastQuery = new Date();
        fetch("https://www.npmjs.com/-/search?text=" + encodeURIComponent(searchBar.text) + "&quality=1.95&popularity=3.3&maintenance=2.05")
            .then(function (r) { return r.json(); })
            .then(function (r) {
            if (_this.lastQuery.getMinutes() == newQuery.getMinutes()) {
                var results = r["objects"].sort(function (a, b) {
                    return b.searchScore - a.searchScore;
                });
                _this.packages.next(results);
            }
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-main",
        templateUrl: "./views/main.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsd0RBQXVEO0FBU3ZELElBQWEsYUFBYTtJQUd0Qix1QkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGMUIsYUFBUSxHQUF5QixJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUV0QywrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUFwQixpQkFlQztRQWRHLElBQUksU0FBUyxHQUFjLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFNUIsS0FBSyxDQUFDLHlDQUF1QyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtEQUErQyxDQUFDO2FBQzlILElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7YUFDbkIsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNILEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDckQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqQyxPQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVc7Z0JBQTdCLENBQTZCLENBQ2hDLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBSzZCLGVBQU07R0FIeEIsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1haW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL21haW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHsgXG4gICAgcHVibGljIHBhY2thZ2VzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIHByaXZhdGUgbGFzdFF1ZXJ5OiBEYXRlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBvbkNsZWFyKCl7XG4gICAgICAgIHRoaXMucGFja2FnZXMubmV4dChbXSk7XG4gICAgfVxuXG4gICAgb25QYWNrYWdlKCRldmVudCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3BhY2thZ2UnLHRoaXMucGFja2FnZXMuZ2V0VmFsdWUoKVskZXZlbnQuaW5kZXhdWydwYWNrYWdlJ11bJ25hbWUnXV0pO1xuICAgIH1cblxuICAgIG9uVGV4dENoYW5nZWQoJGV2ZW50KXtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+JGV2ZW50Lm9iamVjdDtcbiAgICAgICAgbGV0IG5ld1F1ZXJ5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5sYXN0UXVlcnkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy5ucG1qcy5jb20vLS9zZWFyY2g/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hCYXIudGV4dCl9JnF1YWxpdHk9MS45NSZwb3B1bGFyaXR5PTMuMyZtYWludGVuYW5jZT0yLjA1YClcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLmxhc3RRdWVyeS5nZXRNaW51dGVzKCkgPT0gbmV3UXVlcnkuZ2V0TWludXRlcygpKXtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHJbXCJvYmplY3RzXCJdLnNvcnQoKGEsIGIpID0+IFxuICAgICAgICAgICAgICAgICAgICBiLnNlYXJjaFNjb3JlIC0gYS5zZWFyY2hTY29yZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrYWdlcy5uZXh0KHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=