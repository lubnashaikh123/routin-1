import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray : Array <Iuser>=[
    {
      userName:"jhon",
      userId:1,
    },
    {
      userName:"june",
      userId:2,
    },
    {
      userName:"may",
      userId:3,
    },
    {
      userName:"james",
      userId:4,
    },
    {
      userName:"july",
      userId:5,
    },
  ]
  constructor() {} 
  getAllUsers():Array<Iuser>{
    //API call to get data of USERS
    return this.usersArray; 
    }
    getsingleUser(id : number):Iuser{
      return this.usersArray.find(user =>{
        return user.userId === id;
      })!
    }
  }




