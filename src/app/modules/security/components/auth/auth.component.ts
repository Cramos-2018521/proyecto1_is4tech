import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  user: SocialUser | null = null;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      const idToken = user?.idToken || '';
      localStorage.setItem('Bearer', idToken);

      if (idToken) {
        this.router.navigate(['/dogs']);
      }
    });
  }

  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
