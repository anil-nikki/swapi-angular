import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor( private route: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  private setPageTitle(): void {
    const defaultTitle = 'starwars-angular-application';
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;
        if(!child){
          return this.route.snapshot.data['pageTitle'] || defaultTitle;
        }
        while (child?.firstChild) {
          child = child.firstChild
        }
        if(child.snapshot.data['pageTitle']){
          return child.snapshot.data['pageTitle'] || defaultTitle;
        }
      })
    ).subscribe((title: string) => this.title.setTitle(title));
  }
}
