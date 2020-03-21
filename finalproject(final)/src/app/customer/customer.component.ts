import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {Router,RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public details=[];
  constructor(private service:BackendService ,  private router: Router) { 
  }

  ngOnInit(): void {
  }
  edit(){
    this.router.navigate(['/edit']);
  }

}
