import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers/customers.component";
const routes: Routes = [
    { path:'', component: CustomersComponent, 
        children: [{ path: '', component: CustomersComponent }] 
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule{ }