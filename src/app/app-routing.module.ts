import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { AdvertisementtableComponent } from './advertisementtable/advertisementtable.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';

const routes: Routes = [
  {path:"form",component:AdvertisementFormComponent,},
  {path:"table",component:AdvertisementtableComponent},
    {path:"edit",component:EditProductComponentComponent} 
  ,
  // path: ':id', component: EditHotelComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AdvertisementtableComponent,AdvertisementFormComponent,EditProductComponentComponent]
