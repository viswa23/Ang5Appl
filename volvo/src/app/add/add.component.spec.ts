import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../shared/user.service';
import { MessageService }  from '../shared/message.service';
import { HttpClientModule }    from '@angular/common/http';
import {Router} from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports: [FormsModule,BrowserAnimationsModule,HttpClientModule, RouterTestingModule,ReactiveFormsModule],
      providers: [UserService,MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
