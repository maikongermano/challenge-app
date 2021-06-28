import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonComponent } from './pages/form-person/form-person.component';
import { ListPersonComponent } from './pages/list-person/list-person.component';

const routes: Routes = [
  {
    path: 'listPerson',
    component: ListPersonComponent
  },
  {
    path: 'formPerson',
    component: FormPersonComponent
  },
  {
    path: '',
    redirectTo: 'listPerson',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
