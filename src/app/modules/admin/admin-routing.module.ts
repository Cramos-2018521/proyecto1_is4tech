// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project

import { authGuard, loginGuard } from '../security/guards/auth.guard';
import { SecurityModule } from '../security/security.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from '../../form/form.component';
import { ParamUpdateComponent } from '../../param-update/param-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/logi', pathMatch: 'full' },
  { path: 'logi', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'param-update', component: ParamUpdateComponent },
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/modules/security/security.module').then(
        (m) => m.SecurityModule
      ),
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
