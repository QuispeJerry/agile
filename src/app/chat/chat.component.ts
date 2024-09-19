import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userInput: string = '';
  messages: { text: string, isUser: boolean }[] = [];
  botReplies: string[] = [
    'Hola como te ayudo?',
    'No entiendo tu pregunta, ¿podrías ser más específico?',
    'Claro, ¿en qué puedo ayudarte?',
    'Ovbio, ¿qué necesitas?',
  ];

  // Método para enviar un mensaje
  sendMessage(): void {
    if (this.userInput.trim() !== '') {
      // Añadir el mensaje del usuario
      this.messages.push({ text: this.userInput, isUser: true });

      // Limpiar el campo de entrada
      this.userInput = '';

      // Simular la respuesta del bot con un pequeño retraso
      setTimeout(() => {
        const randomReply = this.botReplies[Math.floor(Math.random() * this.botReplies.length)];
        this.messages.push({ text: randomReply, isUser: false });
      }, 1000); // Retraso de 1 segundo
    }
  }
}
