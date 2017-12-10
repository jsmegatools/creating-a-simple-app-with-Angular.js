import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FeaturedItemsComponent } from './featured-items/featured-items.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturedItemsComponent,
    SearchComponent,
    CategoriesComponent,
    NotificationsComponent,
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
