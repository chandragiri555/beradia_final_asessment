import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {CustomerComponent } from './customer/customer.component'  ;


const routes: Routes = [
{path: '/register', component:RegisterComponent},
{path: '/edit', component: EditComponent},
{path: '/customer', component:CustomerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents=[CustomerComponent,RegisterComponent,EditComponent]

