import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'verhalen/:id',
    component: ContentPageComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
