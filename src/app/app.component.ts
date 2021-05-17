import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggled : boolean = false;
  innerWidth : any;

  constructor() { }

  ngOnInit(): void {
    this.width();
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  width(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth >= 992)
      this.toggled = false;
    else
      this.toggled = true;
  }

}

