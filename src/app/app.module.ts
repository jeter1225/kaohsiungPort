import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './information/information.component';
import { PilotOrderComponent } from './pilot-order/pilot-order.component';
import { PilotStatusComponent } from './pilot-status/pilot-status.component';
import { ConfigLogService } from './service-summary/config-log.service';
import { InformationService } from './service-summary/information-service.service';
import { PilotStatusService } from './service-summary/pilot-status-service.service';
import { PilotOrderService } from './service-summary/pilot-order-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule ,MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PilotStatusTableComponent } from './pilot-status-table/pilot-status-table.component';
import { InformationTableComponent } from './information-table/information-table.component';
import { from } from 'rxjs';
import { SendPasswordDialogComponent } from './dialog-summary/send-password-dialog/send-password-dialog.component';
import { PilotOrderTableComponent } from './pilot-order-table/pilot-order-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LogoutComponent } from './dialog-summary/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomepageComponent,
    FpasswordComponent,
    InformationComponent,
    PilotOrderComponent,
    PilotStatusComponent,
    PilotStatusTableComponent,
    InformationTableComponent,
    SendPasswordDialogComponent,
    PilotOrderTableComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule
  ],
  entryComponents: [
    SendPasswordDialogComponent,
    LogoutComponent
  ],
  providers: [ConfigLogService, InformationService, PilotOrderService, PilotStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
