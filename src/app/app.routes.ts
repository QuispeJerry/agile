import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
import { AuthLayoutComponentComponent } from './auth-layout-component/auth-layout-component.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ChatComponent } from './chat/chat.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent},
//   { path: 'register', component: RegisterComponent},
//   { path: 'home', component: HomeComponent },
//   { path: '**', component: HomeComponent },
// ];

export const routes: Routes = [
  {
    path: '', // Rutas protegidas
    component: MainLayoutComponentComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'upload-documents', component: UploadDocumentsComponent},
      { path: 'chat', component: ChatComponent},
      // Otras rutas que requieren el header
    ]
  },
  {
    path: 'auth', // Rutas de autenticación
    component: AuthLayoutComponentComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: '**', redirectTo: 'auth/login' } // Ruta por defecto si no encuentra otras
];