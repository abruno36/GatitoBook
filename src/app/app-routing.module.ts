import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimaisComponent } from './animais/lista-animais/lista-animais.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'animais',
    loadChildren: ()=> import('./animais/animais.module').then((m) => m.AnimaisModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listanimais',
    component: ListaAnimaisComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
