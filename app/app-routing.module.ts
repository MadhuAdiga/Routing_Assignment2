import { NgModule } from '@angular/core'; //Import all the inbuilt metadata and user-defined components and modules
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { RolesComponent } from './roles.component';
import { AdminComponent } from './admin.component';
import { SuperadminComponent } from './superadmin.component';
import { MemberComponent } from './member.component';

const routes : Routes = [// Declare a routes variable which contains the paths and the corresponding routed component 
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Specify the default route to be HomeComponent used in this application
    { path: 'home', component: HomeComponent}, // Specify the three routes used in this application
    { path: 'about', component: AboutComponent},
    { path: 'roles', component: RolesComponent,
      children: [ //signifies the child component of RolesComponent
        { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Specify the default route to be AdminComponent used in this application
        { path: 'admin', component: AdminComponent},// Specify the three nested routes used in this application
        { path: 'superadmin', component: SuperadminComponent},
        { path: 'member', component: MemberComponent}
    ]
    }
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [AboutComponent, HomeComponent, RolesComponent, AdminComponent, SuperadminComponent, MemberComponent]//Export the six routed components used in this application
