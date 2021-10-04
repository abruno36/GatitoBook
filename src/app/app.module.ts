import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from "@angular/material/radio"; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatChipsModule } from "@angular/material/chips";
import { MatSortModule } from "@angular/material/sort";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './componentes/menu/menu.component';
import { NavComponent } from './componentes/nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { NovoUsuarioComponent } from './home/novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
  FooterComponent,
  HeaderComponent,
  MenuComponent,
  NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatButtonModule, 
    MatListModule, 
    MatCardModule, 
    MatTableModule, 
    MatSelectModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatPaginatorModule, 
    MatSnackBarModule,
    MatRadioModule,
    MatChipsModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AutenticacaoModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }