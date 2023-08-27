// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project
import { AuthComponent } from '../security/components/auth/auth.component';
import { authGuard, loginGuard } from '../security/guards/auth.guard';
import { SecurityModule } from '../security/security.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/logi', pathMatch: 'full' },
  { path: 'logi', component: LoginComponent },
  { path: 'dogs', component: DogsComponent, canActivate: [authGuard] },
  { path: 'login', component: AuthComponent, canActivate: [loginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
