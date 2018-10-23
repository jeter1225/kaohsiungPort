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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InformationDataService } from './information-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule ,MatFormFieldModule, MatInputModule, MatIconModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PilotStatusTableComponent } from './pilot-status-table/pilot-status-table.component';
import { InformationTableComponent } from './information-table/information-table.component';
import { from } from 'rxjs';

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
    InformationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    /*HttpClientInMemoryWebApiModule.forRoot(
      InformationDataService, { dataEncapsulation: false }
    ),*/
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    FormsModule
  ],
  providers: [ConfigLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
