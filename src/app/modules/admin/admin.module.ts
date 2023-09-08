// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Project
import { AppRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from '../../form/form.component';

@NgModule({
  declarations: [AdminComponent, DogsComponent, LoginComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule {}
