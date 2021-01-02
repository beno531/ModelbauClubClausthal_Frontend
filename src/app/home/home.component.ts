import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import Home_QUERY from "../apollo/queries/home/site";
import HOMEARTICLES_QUERY from "../apollo/queries/article/homeArticles";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any = {};
  data: any = {};
  loading = true;
  aloading = true;
  errors: any;

  private queryHome: Subscription;
  private queryHomeArticle: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.queryHome = this.apollo
      .watchQuery({
        query: Home_QUERY
      })
      .valueChanges.subscribe(result => {
        this.home = result.data['home'];
        this.loading = result.loading;
        this.errors = result.errors;
      });

      this.queryHomeArticle = this.apollo
      .watchQuery({
        query: HOMEARTICLES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        console.log(this.data);
        this.aloading = result.loading;
        this.errors = result.errors;
      });
  }
  ngOnDestroy() {
    this.queryHome.unsubscribe();
    this.queryHomeArticle.unsubscribe();
  }

}
