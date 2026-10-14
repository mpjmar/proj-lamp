import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css',
})
export class LamparaComponent {
  //inputs - outputs
  enchufada = input<boolean>(false);
  estadoLampara = output<'APAGADA' | 'ENCENDIDA'>();

  // propiedades
  encendida = false;

  // eventos
  onEncenderApagar() {
    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida ? 'ENCENDIDA' : 'APAGADA');
  }
}
