import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var addeventatc: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isStandesamt = false;

  constructor(private route: ActivatedRoute, private ngZone: NgZone) { }

  ngOnInit() {
    setTimeout(() => {
      addeventatc.refresh();
    }, 0);

    addeventatc.refresh();
    this.route.paramMap.subscribe(params => {
      this.isStandesamt = params.get('standesamt') !== '';
    });
  }

}
