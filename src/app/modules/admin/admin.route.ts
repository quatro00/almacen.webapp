import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const adminRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'organizacion', component: OrganizacionComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'configuracion', component: ConfiguracionComponent }
];

export default adminRoutes;