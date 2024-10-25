import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  a: number | null = null;
  b: number | null = null;
  c: number | null = null;
  raiz1: number | null = null;
  raiz2: number | null = null;
  mensaje: string = '';

  calcularRaices() {
    // Verificar que a, b y c no sean null
    if (this.a === null || this.b === null || this.c === null) {
      this.mensaje = "Por favor, ingresa todos los coeficientes.";
      this.raiz1 = null;
      this.raiz2 = null;
      return;
    }

    if (this.a === 0) {
      this.mensaje = "El coeficiente 'a' no puede ser cero.";
      this.raiz1 = null;
      this.raiz2 = null;
      return;
    }

    const discriminante = this.b ** 2 - 4 * this.a * this.c;

    if (discriminante > 0) {
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
      this.mensaje = '';
    } else if (discriminante === 0) {
      this.raiz1 = this.raiz2 = -this.b / (2 * this.a);
      this.mensaje = '';
    } else {
      this.raiz1 = null;
      this.raiz2 = null;
      this.mensaje = 'No hay raíces reales.';
    }
  }
}
