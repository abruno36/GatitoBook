import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
            MensagemModule,
            ReactiveFormsModule,
            MatCardModule, 
            MatToolbarModule,
            MatInputModule,
            MatIconModule,
            MatListModule,
            MatSidenavModule,
            MatFormFieldModule,
            FormsModule],
  exports: [MensagemModule, 
            ReactiveFormsModule,
            MatCardModule,
            MatToolbarModule,
            FormsModule,
            MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
