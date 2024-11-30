import { Component } from '@angular/core';
import { CardModule } from 'primeng/card'; // Importamos CardModule
import { ImageModule } from 'primeng/image'; // Importamos ImageModule
import { ButtonModule } from 'primeng/button'; // Importamos ButtonModule
import { CommonModule } from '@angular/common'; // Importamos CommonModule

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardModule, ImageModule, ButtonModule], // Importamos los módulos de PrimeNG
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  imageUrl: string = 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EDGNF3TDWVFHZD4FG5RCPKSRFM.jpg'; // Imagen representativa de las fiestas
  title: string = 'Fiestas de Quito 2024';
  subtitle: string = 'Una celebración llena de cultura y tradición';
  content: string = 'Las fiestas de Quito son una de las celebraciones más importantes de Ecuador, con desfiles, danzas, conciertos y fuegos artificiales. No te puedes perder este evento único en el país.';

  // Lógica de los botones
  onButtonClick(action: string) {
    if (action === 'details') {
      alert('Ver detalles de las Fiestas de Quito');
    } else if (action === 'schedule') {
      alert('Ver el cronograma de eventos');
    }
  }
}
