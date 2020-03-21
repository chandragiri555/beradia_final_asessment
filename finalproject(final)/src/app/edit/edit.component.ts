import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {ActivatedRoute,Router}  from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 public editdata={
  firstname:null,
  lastname: null,
  email: null,
  address: null,
  city:null,
  state: null

}


 constructor(private editservice:BackendService,private activatedRoute:ActivatedRoute ,private route: Router) { 
   this.editdata;
  }

  ngOnInit(): void {
  }
edit()
{
  this.editservice.editUser(this.editdata)
  .subscribe(data=>{
    console.log(data);
  });
alert("data updated");

}
cancel()
{
  this.route.navigate(['/customer']); 
}
  
}
