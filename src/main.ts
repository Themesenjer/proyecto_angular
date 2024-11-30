import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeworksComponent } from './app/homeworks/homeworks.component';
import { MatricesComponent } from './matrices/matrices.component';
import { CardsComponent } from './app/cards/cards.component';
import { GalleryComponent } from './app/gallery/gallery.component';


const routes: Routes = [
  { path: '', component: HomeworksComponent }, // Ruta principal
  { path: 'matrices', component: MatricesComponent }, // Ruta para "Matrices"
  { path: 'cards', component: CardsComponent }, // Ruta para "Cards e Imágenes"
  { path: 'gallery', component: GalleryComponent }, // Ruta para "Galería"
  { path: '**', redirectTo: '' }, // Redirección para rutas no encontradas
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveedor para manejar las rutas
  ],
}).catch(err => console.error(err));
