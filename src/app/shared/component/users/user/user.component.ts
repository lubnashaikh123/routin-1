import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 userId ! :number;
 userObj ! :Iuser;
  constructor(
    private _route:ActivatedRoute,
    private _userService : UsersService
    ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params);
    this.userId= +this._route.snapshot.params['userId'];
    console.log(this.userId);

    this.userObj = this._userService.getsingleUser(this.userId);
    console.log(this.userObj);

    
  this._route.params
        .subscribe((params : Params)=>{
          this.userId = +params['userId']
          this.userObj = this._userService.getsingleUser(this.userId);
        })
      
    
  }
 
}



