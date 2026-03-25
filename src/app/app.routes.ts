import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultureComponent } from './culture/culture.component';
import { FoodComponent } from './food/food.component';
import { DailyLifeComponent } from './daily-life/daily-life.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'food', component: FoodComponent },
  { path: 'daily-life', component: DailyLifeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
