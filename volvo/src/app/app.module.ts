import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './shared/user.service';
import { MessageService }  from './shared/message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';
//import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, FormsModule,BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, DataTableModule, AppRoutingModule, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [UserService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }