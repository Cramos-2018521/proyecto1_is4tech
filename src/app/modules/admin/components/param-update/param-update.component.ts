import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-param-update',
  templateUrl: './param-update.component.html',
  styleUrls: ['./param-update.component.scss']
})
export class ParamUpdateComponent implements OnDestroy {
  @Input() initialValue: string = '';
  updatedValue: string = '';

  private subscription: Subscription;

  constructor() {
    console.log('Componente ParamUpdate inicializado.');
    // actualización después de 30 segundos
    this.subscription = timer(30000).subscribe(() => {
      this.updatedValue = 'Valor actualizado después de 30 segundos';
      console.log('Valor actualizado:', this.updatedValue);
    });
  }

  ngOnDestroy(): void {
    console.log('Componente ParamUpdate destruido.');
    this.subscription.unsubscribe();
  }
}
