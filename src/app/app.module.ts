import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from "ngx-markdown";

import { RouterModule, Routes } from "@angular/router";

import { NavComponent } from "./shared/nav/nav.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";
import { CategoryComponent } from "./category/category.component";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ArticlesComponent,
    ArticleComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
