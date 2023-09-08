import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  inputValue: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Componente Form inicializado.');
  }

  onInputChange() {
    console.log('Valor cambió a:', this.inputValue);
  }

  redirectToParamUpdate() {
    console.log('Redireccionando a ParamUpdateComponent...');
    this.router.navigate(['/param-update'], {
      queryParams: { initialValue: this.inputValue }
    });
  }

  ngOnDestroy(): void {
    console.log('Componente Form destruido.');
  }
}
