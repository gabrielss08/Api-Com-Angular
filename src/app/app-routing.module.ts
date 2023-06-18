import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { RegistroComponent } from 'src/app/registro/registro.component';
import { PostoComponent } from './posto/posto.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registroposto', component: PostoComponent},
  {path: 'postos', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
