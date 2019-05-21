import { Component, OnInit } from '@angular/core';
declare var addeventatc: any;

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      addeventatc.refresh();
    }, 0);
  }

}
