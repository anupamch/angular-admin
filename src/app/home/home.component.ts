import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice:ApiService) { }
  allUsers:any = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.apiservice.users().subscribe((response:any)=>{
      console.log(response)
      this.allUsers = response
      console.log(this.allUsers)
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.apiservice.users().unsubscribe();
    this.dtTrigger.unsubscribe();
  }

}
