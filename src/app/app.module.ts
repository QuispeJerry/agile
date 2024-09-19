// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { AuthLayoutComponentComponent } from './auth-layout-component/auth-layout-component.component';
// import { MainLayoutComponentComponent } from './main-layout-component/main-layout-component.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     AuthLayoutComponentComponent,
//     MainLayoutComponentComponent,
//     HomeComponent,
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([ // Asegúrate de importar las rutas
//       {
//         path: '',
//         component: MainLayoutComponentComponent,
//         children: [
//           { path: 'home', component: HomeComponent }
//         ]
//       },
//       {
//         path: 'auth',
//         component: AuthLayoutComponentComponent,
//         children: [
//           { path: 'login', component: LoginComponent },
//           { path: 'register', component: RegisterComponent }
//         ]
//       },
//       { path: '**', redirectTo: 'auth/login' }
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
