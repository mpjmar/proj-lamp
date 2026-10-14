import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './components/lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proj-lamp';

  enchufada = false;
  estadoLampara: 'APAGADA' | 'ENCENDIDA' = 'APAGADA';

  // eventos
  onDesenchufar() {
    this.enchufada = false;
  }

  onEnchufar() {
    this.enchufada = true;
  }

  onCambioEstado(estado: 'APAGADA' | 'ENCENDIDA') {
    this.estadoLampara = estado;
  }
}
