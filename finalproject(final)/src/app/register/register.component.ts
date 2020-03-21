import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {Router,RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerData={
    firstname:null,
    lastname: null,
    email:null,
    address: null,
    city:null,
    state: null
  }
  constructor(private service:BackendService ,  private router: Router) { 
    this.registerData;
  }
  ngOnInit(): void {
  }
onSubmit()
  {
    this.service.registerUser(this.registerData)
      .subscribe(
      res=>{console.log(res),
        alert("registered successfully");
      err=>console.log(err)
      });
      this.router.navigate(['/']);
  }
}
