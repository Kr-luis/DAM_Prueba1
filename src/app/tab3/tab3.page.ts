import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  firstDate: string;
  secondDate: string;
  daysDifference: number;

  constructor() {
    this.firstDate = new Date().toISOString(); // Establecer una fecha por defecto
    this.secondDate = new Date().toISOString(); // Establecer otra fecha por defecto
    this.daysDifference = 0; // Inicializar la diferencia de días
  }

  onDateChange() {
    if (this.firstDate && this.secondDate) {
      const date1 = new Date(this.firstDate);
      const date2 = new Date(this.secondDate);
      
      // Calcular la diferencia en días
      this.daysDifference = Math.abs((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24));
    }
  }
  
}
