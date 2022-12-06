import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactBlockComponent } from './components/contact-block/contact-block.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    ReviewsComponent,
    HomeComponent,
    ContentPageComponent,
    ContactBlockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
