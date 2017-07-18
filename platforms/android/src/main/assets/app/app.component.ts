import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SearchBar } from "ui/search-bar";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    public packages: BehaviorSubject<any> = new BehaviorSubject([]);
    constructor(){

    }

    onClear(){
        this.packages.next([]);
    }

    onTextChanged($event){
        let searchBar = <SearchBar>$event.object;
        fetch(`https://www.npmjs.com/-/search?text=${encodeURIComponent(searchBar.text)}&quality=1.95&popularity=3.3&maintenance=2.05`)
        .then(r => r.json())
        .then(r => {
            let results = r["objects"].sort((a, b) => 
                b.searchScore - a.searchScore
            );
            this.packages.next(results);
        });
    }
}
