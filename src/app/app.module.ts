import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { FeaturedItemsComponent } from './featured-items/featured-items.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ItemsService } from './items.service';
import { NotificationsService } from './notifications.service';


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
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [ItemsService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
