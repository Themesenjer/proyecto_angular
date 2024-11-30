import { Component } from '@angular/core';

@Component({
  selector: 'app-homeworks',
  standalone: true,
  template: `
    <h1>Diseño de Interfaces</h1>
    <h2>Deberes dados por el ingeniero Diego Yanez</h2>
  `,
  styles: [`
    h1 { font-size: 2rem; color: #007bff; }
    h2 { font-size: 1.5rem; color: #555; }
  `],
})
export class HomeworksComponent {}
