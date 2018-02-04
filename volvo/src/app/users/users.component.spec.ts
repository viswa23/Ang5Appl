import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableModule } from 'primeng/datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users.component';
import { UserService } from '../shared/user.service';
import { MessageService }  from '../shared/message.service';
import { HttpClientModule }    from '@angular/common/http';
import {Router} from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';



describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [FormsModule,BrowserAnimationsModule,HttpClientModule, RouterTestingModule,ReactiveFormsModule,DataTableModule, DataTableModule],
      providers: [UserService,MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
