import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/">Homeworks</a>
      <a routerLink="/matrices">Matrices</a>
      <a routerLink="/cards">Cards e Imágenes</a>
      <a routerLink="/gallery">Galería</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      background: #f8f9fa;
      padding: 1rem;
    }
    a {
      text-decoration: none;
      color: #007bff;
    }
    a:hover {
      text-decoration: underline;
    }
  `],
})
export class AppComponent {}
