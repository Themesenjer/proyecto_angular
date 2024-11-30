import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrices',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent {
  matrix: number[][] = []; // Matriz vacía inicial
  rows: any[] = []; // Variable para filas de la tabla

  // Función para generar la matriz de tamaño n x n
  generateMatrix(size: number): void {
    this.matrix = []; // Limpiar la matriz antes de generar una nueva
    this.rows = []; // Limpiar las filas antes de generar una nueva

    let value = 1;
    // Llenar la matriz con valores de ejemplo (por ejemplo, del 1 al n^2)
    for (let i = 0; i < size; i++) {
      let row: number[] = [];
      for (let j = 0; j < size; j++) {
        row.push(value++);
      }
      this.matrix.push(row);
    }

    // Asignar las filas de la tabla (si las necesitamos de manera específica)
    this.rows = this.matrix;
  }
}
