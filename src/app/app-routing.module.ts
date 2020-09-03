import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  { path: 'tests', component: TestsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: '', redirectTo: 'tests', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
