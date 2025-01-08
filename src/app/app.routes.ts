import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
{path:"",redirectTo:"Home",pathMatch:'full'},
{path:"Home",component: HomeComponent},
{path:"Contact", component:ContactComponent},
{path:"Portfolio", component:PortfolioComponent},
{path:"About",component:AboutComponent},
{path:"**",component:PageNotFoundComponent}


];
