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
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { LogoutComponent } from './dialog-summary/logout/logout.component';
import { PilotBreakInspectComponent } from './dialog-summary/pilot-break-inspect/pilot-break-inspect.component';
import { FlowerLeaveInspectComponent } from './dialog-summary/flower-leave-inspect/flower-leave-inspect.component';
import { PilotOrderChangeOrderComponent } from './dialog-summary/pilot-order-change-order/pilot-order-change-order.component';
import { PilotOrderReturnComponent } from './dialog-summary/pilot-order-return/pilot-order-return.component';
import { PilotOrderContinueShipComponent } from './dialog-summary/pilot-order-continue-ship/pilot-order-continue-ship.component';
import { PilotOrderContinueShipTableComponent } from './pilot-order-continue-record-table/pilot-order-continue-record-table.component';
import { PilotOrderChangeOrderTableComponent } from './pilot-order-change-order-table/pilot-order-change-order-table.component';
import { PilotOrderReturnTableComponent } from './pilot-order-return-table/pilot-order-return-table.component';

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
    LogoutComponent,
    PilotBreakInspectComponent,
    FlowerLeaveInspectComponent,
    PilotOrderChangeOrderComponent,
    PilotOrderReturnComponent,
    PilotOrderContinueShipComponent,
    PilotOrderContinueShipTableComponent,
    PilotOrderChangeOrderTableComponent,
    PilotOrderReturnTableComponent
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
    MatRadioModule,
    MatMenuModule,
    MatSelectModule
  ],
  entryComponents: [
    SendPasswordDialogComponent,
    LogoutComponent,
    PilotBreakInspectComponent,
    FlowerLeaveInspectComponent,
    PilotOrderChangeOrderComponent,
    PilotOrderReturnComponent,
    PilotOrderContinueShipComponent
  ],
  providers: [ConfigLogService, InformationService, PilotOrderService, PilotStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
