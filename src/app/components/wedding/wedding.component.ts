import { Component, OnInit } from '@angular/core';
declare var addeventatc: any;

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      addeventatc.refresh();
    }, 0);
  }

}
