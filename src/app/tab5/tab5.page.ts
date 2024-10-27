import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  textToDownload: string = ''; // Variable para el texto

  constructor() { }

  // Función para descargar el texto como un archivo .txt
  downloadTextFile() {
    const blob = new Blob([this.textToDownload], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'texto.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}