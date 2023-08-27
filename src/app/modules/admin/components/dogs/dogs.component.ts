import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService
} from '@abacritt/angularx-social-login';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  message?: string;
  status = false;
  textAreaVal = 'Escribe algo';
  accessToken = '';

  constructor(
    private dogService: DogService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.getDog();
  }

  async getAccessToken(): Promise<void> {
    this.accessToken = await this.authService.getAccessToken(
      GoogleLoginProvider.PROVIDER_ID
    );
  }

  getDog(): void {
    this.dogService.getDog().subscribe(({ status, message }) => {
      this.status = status === 'success';
      if (this.status) this.message = message;
    });
  }
}
