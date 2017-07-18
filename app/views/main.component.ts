import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { SearchBar } from "ui/search-bar";
import { ListView } from "ui/list-view";

@Component({
    selector: "ns-main",
    templateUrl: "./views/main.component.html",
})

export class MainComponent { 
    public packages: BehaviorSubject<any> = new BehaviorSubject([]);
    private lastQuery: Date;
    constructor(public router: Router) {}

    onClear(){
        this.packages.next([]);
    }

    onPackage($event){
        this.router.navigate(['/package',this.packages.getValue()[$event.index]['package']['name']]);
    }

    onTextChanged($event){
        let searchBar = <SearchBar>$event.object;
        let newQuery = new Date();
        this.lastQuery = new Date();

        fetch(`https://www.npmjs.com/-/search?text=${encodeURIComponent(searchBar.text)}&quality=1.95&popularity=3.3&maintenance=2.05`)
        .then(r => r.json())
        .then(r => {
            if(this.lastQuery.getMinutes() == newQuery.getMinutes()){
                let results = r["objects"].sort((a, b) => 
                    b.searchScore - a.searchScore
                );
                this.packages.next(results);
            }
        });
    }
}
