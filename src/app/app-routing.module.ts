import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';
import { ChildComponent } from './child/child.component';

import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
{path:'', component:DefaultComponent},                           
{path:'home/:id', component:HomeComponent},
// {path:'home', component:HomeComponent},

{path:'about', component:AboutComponent},

{path:'contact', component:ContactComponent,
  
                 canActivate:[AuthService]
},
{path:'Register', component:RegisterComponent},
{path:'parent', component:ParentComponent},
{path:'child', component:ChildComponent},
{path:'login', component:LoginComponent},
{path:'**', component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
