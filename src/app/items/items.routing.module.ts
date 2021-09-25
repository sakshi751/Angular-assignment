import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ItemsComponent } from "./items/items.component";

const routes: Routes = [
    { path:'', component: ItemsComponent, 
        children: [{ path: '', component: ItemsComponent }] 
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRoutingModule{ }