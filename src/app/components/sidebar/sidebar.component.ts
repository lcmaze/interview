import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sval: string;

  constructor(private service: ServiceService) {
    this.service.selected.subscribe(value => {
      this.sval = value;
    })
   }

  ngOnInit(): void {
  }

}
