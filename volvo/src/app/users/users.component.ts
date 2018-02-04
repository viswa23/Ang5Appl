import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import {Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  heroes$: Observable<User[]>;
  private searchTerms = new Subject<string>();

  users: User[];
  public bSearchBox:boolean = true
  sname:string
  //

  constructor(private userService: UserService, private route:Router) { }

  ngOnInit() {
    this.getUsers();
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchHeroes(term)),
    );
  }

search(term: string): void {
    this.searchTerms.next(term);
    this.bSearchBox=true
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(heroes => this.users = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addHero({ name } as User)
      .subscribe(hero => {
        this.users.push(hero);
      });
  }

  delete(user: User): void {
    console.log("delete+++++"+JSON.stringify(user))
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

listClick(item:any, user:User){
  this.sname  = user.name
  
  this.bSearchBox =false
  console.log("item="+JSON.stringify(user))
  this.users= [];
  var temp:Array<User>=[]
  temp.push(user)
  //this.getUser(user.id)
  this.users = temp
}

  edit(user:User){
    console.log("edit clicked"+JSON.stringify(user))
    this.route.navigate([`/edit/${user.id}`])
  }
  
  clear() {
    this.sname = ""
    this.getUsers();
  }

}