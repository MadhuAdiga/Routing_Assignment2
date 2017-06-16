import { NgModule } from '@angular/core'; //Import all the inbuilt metadata and user-defined components and modules
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { RolesComponent } from './roles.component';
import { AdminComponent } from './admin.component';
import { SuperadminComponent } from './superadmin.component';
import { MemberComponent } from './member.component';

const routes : Routes = [// Declare a routes variable which contains the paths and the corresponding routed component 
    { path: 'about', component: AboutComponent},// Specify the three routes used in this application
    { path: 'home', component: HomeComponent},
    { path: 'roles', component: RolesComponent},
    { path: 'roles/admin', component: AdminComponent},// Specify the three nested routes used in this application
    { path: 'roles/superadmin', component: SuperadminComponent},
    { path: 'roles/member', component: MemberComponent}
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [AboutComponent, HomeComponent, RolesComponent, AdminComponent, SuperadminComponent, MemberComponent]//Export the six routed components used in this application
