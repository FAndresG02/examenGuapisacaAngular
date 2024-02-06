import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecargasComponent } from './pages/recargas/recargas.component';

const routes: Routes = [
  {path: "", component: RecargasComponent},
  {path: "paginas/recargas", component: RecargasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
