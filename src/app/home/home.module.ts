import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [CommonModule, 
            HomeRoutingModule, 
            MatCardModule, 
            MatToolbarModule,
            FormsModule, 
            MensagemModule, 
            ReactiveFormsModule],
  exports: [HomeComponent]
  
})
export class HomeModule { }
