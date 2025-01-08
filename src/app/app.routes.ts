import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
{path:"Home",component: HomeComponent},
{path:"Contact", component:ContactComponent},
{path:"Portfolio", component:PortfolioComponent},
{path:"About",component:AboutComponent}

];
