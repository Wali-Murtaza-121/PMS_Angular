import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';
import { HomeComponent } from './home/home.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { UIComponent } from './ui/ui.component';

const routes: Routes = [
  {path:'Pet-Form',component:PetFormComponent},
  {path:'Home',component:HomeComponent},
  {path:'Payment-Form',component:PaymentFormComponent},
  {path:'Payment-Detail',component:PaymentDetailComponent},
  {path:'UI',component:UIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
