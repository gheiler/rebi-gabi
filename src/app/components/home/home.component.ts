import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var addeventatc: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  isStandesamt = false;
  imageSources: Array<string>;

  constructor(private route: ActivatedRoute) {
    this.imageSources = new Array<string> ();
    this.imageSources.push('/assets/img/uns/r+g.1.jpg');
    this.imageSources.push('/assets/img/uns/r+g.2.jpg');
    this.imageSources.push('/assets/img/uns/r+g.3.jpg');
    this.imageSources.push('/assets/img/uns/r+g.4.jpg');
    this.imageSources.push('/assets/img/uns/r+g.5.jpg');
    this.imageSources.push('/assets/img/uns/r+g.6.jpg');
    this.imageSources.push('/assets/img/uns/r+g.7.jpg');
    this.imageSources.push('/assets/img/uns/r+g.8.jpg');
  }

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
