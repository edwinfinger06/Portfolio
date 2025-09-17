import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [

  {path: 'root', component: AppComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {
    path: 'home', component: HomeComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: 'projects', component: ProjectsComponent,
        data: { breadcrumb: 'Projects' }
      },
      {
        path: 'contact-us', component: ContactUsComponent,
        data: { breadcrumb: 'Contact us' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
