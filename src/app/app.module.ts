import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './Components/pagina-inicial/pagina-inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { CarouselComponent } from './Components/carousel/carousel.component';
import { SobreComponent } from './Components/sobre/sobre.component';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardComponent } from './Components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    SobreComponent,
    ContatosComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NavbarComponent,
    CarouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
