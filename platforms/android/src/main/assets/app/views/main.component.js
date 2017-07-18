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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsd0RBQXVEO0FBU3ZELElBQWEsYUFBYTtJQUd0Qix1QkFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGMUIsYUFBUSxHQUF5QixJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVyQywrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUFwQixpQkFlQztRQWRHLElBQUksU0FBUyxHQUFjLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFNUIsS0FBSyxDQUFDLHlDQUF1QyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtEQUErQyxDQUFDO2FBQzlILElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7YUFDbkIsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNILEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDckQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUNqQyxPQUFBLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVc7Z0JBQTdCLENBQTZCLENBQ2hDLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNkJBQTZCO0tBQzdDLENBQUM7cUNBSzZCLGVBQU07R0FIeEIsYUFBYSxDQTZCekI7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1haW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXdzL21haW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHsgXG4gICAgcHVibGljIHBhY2thZ2VzOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIHByaXZhdGUgbGFzdFF1ZXJ5OiBEYXRlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIG9uQ2xlYXIoKXtcbiAgICAgICAgdGhpcy5wYWNrYWdlcy5uZXh0KFtdKTtcbiAgICB9XG5cbiAgICBvblBhY2thZ2UoJGV2ZW50KXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFja2FnZScsdGhpcy5wYWNrYWdlcy5nZXRWYWx1ZSgpWyRldmVudC5pbmRleF1bJ3BhY2thZ2UnXVsnbmFtZSddXSk7XG4gICAgfVxuXG4gICAgb25UZXh0Q2hhbmdlZCgkZXZlbnQpe1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj4kZXZlbnQub2JqZWN0O1xuICAgICAgICBsZXQgbmV3UXVlcnkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmxhc3RRdWVyeSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS8tL3NlYXJjaD90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaEJhci50ZXh0KX0mcXVhbGl0eT0xLjk1JnBvcHVsYXJpdHk9My4zJm1haW50ZW5hbmNlPTIuMDVgKVxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbihyID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMubGFzdFF1ZXJ5LmdldE1pbnV0ZXMoKSA9PSBuZXdRdWVyeS5nZXRNaW51dGVzKCkpe1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gcltcIm9iamVjdHNcIl0uc29ydCgoYSwgYikgPT4gXG4gICAgICAgICAgICAgICAgICAgIGIuc2VhcmNoU2NvcmUgLSBhLnNlYXJjaFNjb3JlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhY2thZ2VzLm5leHQocmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==