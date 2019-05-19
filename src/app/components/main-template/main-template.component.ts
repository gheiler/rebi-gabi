import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {
  isStandesamt = false;
  section = 'home';

  constructor(public languageService: LanguageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.languageService.setLanguage(params.get('language'));
      this.isStandesamt = params.get('standesamt') !== '';
    });
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const page = event.state.root.firstChild.firstChild;
        this.section = page.data.name;
      }
    });
    this.section = this.route.firstChild.snapshot.data.name;
  }

  changeLanguage(language) {
    this.languageService.setLanguage(language);
  }

  openGoogleForm() {
    const docFile = this.languageService.getLanguage() + this.isStandesamt;
    let formUrl = 'https://forms.gle/5rhUpvt8vgUPzdkS8';
    switch (docFile) {
      case 'detrue':
        formUrl = 'https://forms.gle/sBYjgRnigpqV2wrS7';
        break;
      case 'defalse':
        // ToDo change
        formUrl = 'https://forms.gle/RXDLE9KZfe5aMuox8';
        break;
      case 'esfalse':
        // ToDo change
        formUrl = 'https://forms.gle/gAFdf4b4KTzVDrUu7';
        break;
    }
    window.open(formUrl, '_blank');
  }

}
