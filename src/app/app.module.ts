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
import { ConfigLogService } from './config-log.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule ,MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PilotStatusTableComponent } from './pilot-status-table/pilot-status-table.component';
import { InformationTableComponent } from './information-table/information-table.component';
import { from } from 'rxjs';
import { SendPasswordDialogComponent } from './dialog-summary/send-password-dialog/send-password-dialog.component';
import { PilotOrderTableComponent } from './pilot-order-table/pilot-order-table.component';
import {MatTabsModule} from '@angular/material/tabs';

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
    PilotOrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InformationDataService, { dataEncapsulation: false }
    ),*/
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    SendPasswordDialogComponent
  ],
  providers: [ConfigLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
