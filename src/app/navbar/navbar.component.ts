import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private myElement: ElementRef) { }
  @ViewChild('mySidenav', { static: false }) mySidenav!: ElementRef;
  
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    //this.element= this.myElement.nativeElement.querySelector('mySidenav');
    
  }

  

  openNav() {
    this.mySidenav.nativeElement.style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
  }

}
