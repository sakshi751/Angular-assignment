import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items/items.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'customers', component: CustomersComponent },
  { path: 'items', component: ItemsComponent }
  // { path:'customers', loadChildren: './customers/customers.module#CustomersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
