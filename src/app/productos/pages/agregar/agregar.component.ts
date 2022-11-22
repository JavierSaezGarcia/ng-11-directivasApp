import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  
  colorQueQuieroLabel: string = "green";
  mensaje: string = "Debe rellenar este campo";
  texto1: string = 'Javier Saez';
  color: string = 'green';

  constructor ( private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  tieneError ( campo: string ): boolean {
   return this.miFormulario.get(campo)?.invalid || false;     
  }

  cambiarNombre(){
    this.texto1 = Math.round(Math.random() * 10).toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
    console.log(color)
  }


}
