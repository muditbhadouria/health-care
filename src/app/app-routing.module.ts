import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments/payments.component';
import { LabsComponent } from './labs/labs.component';

const routes: Routes = [
  { path: 'tests', component: LabsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: '', redirectTo: 'tests', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
