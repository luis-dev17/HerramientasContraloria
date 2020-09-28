// importar los modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importar componentes a los cuales se les hara una pagina exclusiva
import {LoginComponent} from './components/login/login.component';
//import {TablaComponent}from './components/tabla/tabla.component'; 
//import {GraficasComponent} from './components/graficas/graficas.component';

//array de rutas

const appRoutes: Routes = [
{path:'login',component:LoginComponent}
 //{path: 'tabla', component:TablaComponent},
 //{path: 'graficas', component:GraficasComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);