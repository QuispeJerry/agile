import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {
  pdfUrls: SafeResourceUrl[] = [];
  files: File[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  // Método para abrir el selector de archivos
  openFileSelector(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // Método para capturar los archivos seleccionados
  onFileSelected(event: any): void {
    const selectedFiles = event.target.files;
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.type === 'application/pdf') {
        this.files.push(file);
        const fileUrl = URL.createObjectURL(file);
        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl); // Sanitizamos la URL
        this.pdfUrls.push(safeUrl);
      }
    }
  }

  // Método para limpiar los archivos seleccionados
  clearFiles(): void {
    this.files = [];
    this.pdfUrls = [];
  }

  // Método para aceptar los archivos seleccionados (puedes añadir lógica adicional)
  acceptFiles(): void {
    if (this.files.length > 0) {
      // Puedes implementar aquí el guardado en el backend o la lógica adicional
      console.log('Archivos aceptados:', this.files);
    }
  }
}
