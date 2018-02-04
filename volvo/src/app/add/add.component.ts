import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

@Input() user: User;
editForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private userService: UserService, private location: Location) { 
    this.createForm()
  }
  ngOnInit() {
   // this.getUser()
  }

  createForm() {
    this.editForm = this.fb.group({
      id: ['', Validators.required ],
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      birthdate: ['', Validators.required ],
      phone: ['', Validators.required ],
      city: ['', Validators.required ],
      street: ['', Validators.required ],
      number: ['', Validators.required ]
    });
}

getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user
        this.setValues()
      });
  }

setValues(){
this.editForm.controls['id'].setValue(this.user.id);
this.editForm.controls['name'].setValue(this.user.name);
this.editForm.controls['surname'].setValue(this.user.surname);
this.editForm.controls['birthdate'].setValue(this.user.birthDate);
this.editForm.controls['phone'].setValue(this.user.phone);
this.editForm.controls['city'].setValue(this.user.city);
this.editForm.controls['street'].setValue(this.user.street);
this.editForm.controls['number'].setValue(this.user.number);
console.log("result= "+JSON.stringify(this.user))
}

goBack(): void {
    this.location.back();
  }

add() {
  console.log("add====")
   //this.user.id = "89"
   
  let userObj:User= new User()
  userObj.id = this.editForm.controls['id'].value
  userObj.id = this.editForm.controls['id'].value
  userObj.name = this.editForm.controls['name'].value
  userObj.surname = this.editForm.controls['surname'].value
  userObj.birthDate = this.editForm.controls['birthdate'].value
  userObj.phone = this.editForm.controls['phone'].value
  userObj.city = this.editForm.controls['city'].value
  userObj.street = this.editForm.controls['street'].value
  userObj.number = this.editForm.controls['number'].value
   
  //
  
  this.userService.addHero(userObj).subscribe(() => this.goBack());
  
}

}
