import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './information/information.component';
import { InformationService } from './service-summary/information-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule ,MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule } from '@angular/material';
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
import { AuthenService } from './service-summary/authen.service';
import { Global } from './global';
import { DialogDraggableDirectiveTitle } from './dialog-draggable.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BreakDialogComponent } from './dialog-summary/break-dialog/break-dialog.component';
import { LeaveDialogComponent } from './dialog-summary/leave-dialog/leave-dialog.component';
import { BreaktimeDialogComponent } from './dialog-summary/breaktime-dialog/breaktime-dialog.component';
import { ReturnDialogComponent } from './dialog-summary/return-dialog/return-dialog.component';
import { UnscheduleDialogComponent } from './dialog-summary/unschedule-dialog/unschedule-dialog.component';
import { ReasonDialogComponent } from './dialog-summary/reason-dialog/reason-dialog.component';
import { FurloughDialogComponent } from './dialog-summary/furlough-dialog/furlough-dialog.component';


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
    UnscheduleComponent,
    BreakDialogComponent,
    LeaveDialogComponent,
    DialogDraggableDirectiveTitle,
    BreaktimeDialogComponent,
    ReturnDialogComponent,
    UnscheduleDialogComponent,
    ReasonDialogComponent,
    FurloughDialogComponent
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
    MatCardModule,
    MatGridListModule,
    DragDropModule
  ],
  entryComponents: [
    SendPasswordDialogComponent,
    LogoutComponent,
    BreakDialogComponent,
    LeaveDialogComponent,
    BreaktimeDialogComponent,
    ReturnDialogComponent,
    UnscheduleDialogComponent,
    ReasonDialogComponent,
    FurloughDialogComponent
  ],
  providers: [InformationService, 
              BreakService, 
              FurloughService, 
              LeaveService, 
              StatusService, 
              UnscheduleService, 
              WaitingService, 
              WorkingService,
              AuthenService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
