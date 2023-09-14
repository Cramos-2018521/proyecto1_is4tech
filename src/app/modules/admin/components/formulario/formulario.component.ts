import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

function NoSpecialCharactersValidator(control: FormControl) {
  const pattern = /^[a-zA-Z0-9]*$/;
  if (!pattern.test(control.value)) {
    return { noSpecialCharacters: true };
  }
  return null;
}

function NitValidator(control: FormControl) {
  if (control.value?.length < 10) {
    return { nitInvalido: true };
  }
  return null;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  miFormulario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
          NoSpecialCharactersValidator
        ]
      ],
      fechaNacimiento: [
        '',
        [Validators.required, this.FechaNacimientoValidator]
      ],
      nit: ['', [Validators.required, NitValidator]],
      comentario: ['', [Validators.required, Validators.maxLength(200)]],
      nuevoIngreso: [false],
      telefonoEmergencia: ['', [Validators.maxLength(8)]],
      direccion: ['']
    });
  }

  validarCampo(campo: string): void {
    const control = this.miFormulario.get(campo);
    if (control) {
      control.markAsTouched();
    }
  }

  mostrarError(campo: string): boolean | null {
    const control = this.miFormulario.get(campo);
    return control && control.invalid && control.touched;
  }

  guardar(): void {
    const nuevoIngreso = this.miFormulario.get('nuevoIngreso')?.value;

    if (
      this.miFormulario.valid &&
      nuevoIngreso !== null &&
      nuevoIngreso === true
    ) {
    }
  }

  limpiar(): void {
    this.miFormulario.reset();
  }

  FechaNacimientoValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const inputDate = new Date(control.value);
    const currentDate = new Date();

    if (inputDate > currentDate) {
      return { fechaNacimientoInvalida: true };
    }

    return null;
  }
}
