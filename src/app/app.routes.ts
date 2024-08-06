import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RamaisListComponent } from './modules/ramais/ramais-list/ramais-list.component';

export const routes: Routes = [
  {
    path: '',
    component: RamaisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
