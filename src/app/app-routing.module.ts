import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { InformationComponent } from './information/information.component';
import { OrderComponent } from './order/order.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { 
    path: 'homepage', 
    component: HomepageComponent,
    children:[
      { path: 'information', component: InformationComponent },
      { path: 'order', component: OrderComponent },
      { path: 'status', component: StatusComponent }
    ]
  },
  { path: 'fpassword', component: FpasswordComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [ InformationComponent, OrderComponent, StatusComponent ]
