import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule} from '@angular/common/http';
>>>>>>> origin/master

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/sared/navbar/navbar.component';

// Importar rutas
import { ROUTES} from './app.routes';

<<<<<<< HEAD
=======
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/sared/cards/cards.component'


>>>>>>> origin/master
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    NavbarComponent,
    NoimagePipe,
    CardsComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true})
  ],
<<<<<<< HEAD
  providers: [],
=======
  providers: [ ],
>>>>>>> origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
