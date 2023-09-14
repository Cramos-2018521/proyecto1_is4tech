// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Project
import { AppRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { CommaSeparateDirective } from '../shared/directives/separate/comma-separate.directive';
import { HighlightDirective } from '../shared/directives/highlight/highlight.directive';
import { CopyToClipboardDirective } from '../shared/directives/copy-to-clipboard/copy-to-clipboard.directive';
import { SubstringPipe } from '../shared/pipes/substring.pipe';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AdminComponent,
    DogsComponent,
    LoginComponent,
    CommaSeparateDirective,
    FormComponent,
    HighlightDirective,
    CopyToClipboardDirective,
    SubstringPipe,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AppModule {}
