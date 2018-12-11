import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './information/information.component';
import { ConfigLogService } from './service-summary/config-log.service';
import { InformationService } from './service-summary/information-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule ,MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InformationTableComponent } from './table/information-table/information-table.component';
import { from } from 'rxjs';
import { SendPasswordDialogComponent } from './dialog-summary/send-password-dialog/send-password-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LogoutComponent } from './dialog-summary/logout/logout.component';
import { PilotStatusComponent } from './pilot-status/pilot-status.component';
import { LeaveComponent } from './table/leave/leave.component';
import { WorkingComponent } from './table/working/working.component';
import { AssignedComponent } from './table/assigned/assigned.component';
import { BreakComponent } from './table/break/break.component';
import { ContinueWorkComponent } from './table/continue-work/continue-work.component';
import { FurloughComponent } from './table/furlough/furlough.component';
import { WaitingComponent } from './table/waiting/waiting.component';
import { UnscheduleComponent } from './table/unschedule/unschedule.component';
import { BreakService } from './service-summary/break.service';
import { FurloughService } from './service-summary/furlough.service';
import { LeaveService } from './service-summary/leave.service';
import { StatusService } from './service-summary/status.service';
import { UnscheduleService } from './service-summary/unschedule.service';
import { WaitingService } from './service-summary/waiting.service';
import { WorkingService } from './service-summary/working.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomepageComponent,
    FpasswordComponent,
    InformationComponent,
    InformationTableComponent,
    SendPasswordDialogComponent,
    LogoutComponent,
    PilotStatusComponent,
    LeaveComponent,
    WorkingComponent,
    AssignedComponent,
    BreakComponent,
    ContinueWorkComponent,
    FurloughComponent,
    WaitingComponent,
    UnscheduleComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule
  ],
  entryComponents: [
    SendPasswordDialogComponent,
    LogoutComponent,
  ],
  providers: [ConfigLogService, 
              InformationService, 
              BreakService, 
              FurloughService, 
              LeaveService, 
              StatusService, 
              UnscheduleService, 
              WaitingService, 
              WorkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
