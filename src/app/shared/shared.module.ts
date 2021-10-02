import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
            MensagemModule,
            ReactiveFormsModule,
            MatCardModule, 
            MatToolbarModule,
            FormsModule],
  exports: [MensagemModule, 
            ReactiveFormsModule,
            MatCardModule,
            MatToolbarModule,
            FormsModule,
            MatButtonModule]
})
export class SharedModule { }
