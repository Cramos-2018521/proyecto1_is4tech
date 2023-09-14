// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project

import { authGuard, loginGuard } from '../security/guards/auth.guard';
import { SecurityModule } from '../security/security.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { ParamUpdateComponent } from './components/param-update/param-update.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/logi', pathMatch: 'full' },
  { path: 'logi', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'param-update', component: ParamUpdateComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] },
  {
    path: 'login',
    loadChildren: () =>
      import('../security/security.module').then((m) => m.SecurityModule),
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
