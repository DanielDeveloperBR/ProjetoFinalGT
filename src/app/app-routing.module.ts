import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './Components/contatos/contatos.component';
import { SobreComponent } from './Components/sobre/sobre.component';
import { PaginaInicialComponent } from './Components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {path: "contato", component: ContatosComponent},
  {path: "sobre", component: SobreComponent},
  {path: "", component: PaginaInicialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
