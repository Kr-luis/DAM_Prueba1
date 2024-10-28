import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  textToDownload: string = ''; // Variable para el texto

  constructor() {}

  // Función para descargar el texto como un archivo .txt
  async downloadTextFile() {
    try {
      await Filesystem.writeFile({
        path: 'texto.txt',
        data: this.textToDownload,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });

      alert('Archivo guardado exitosamente en la carpeta de documentos');
    } catch (e) {
      console.error('Error guardando el archivo', e);
      alert('No se pudo guardar el archivo.');
    }
  }
}