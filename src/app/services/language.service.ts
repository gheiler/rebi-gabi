import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language: string;
  private defaultLanguage = 'de';

  constructor(private translate: TranslateService) {
    this.language = this.defaultLanguage;
    this.translate.addLangs(['de', 'es']);
    this.translate.setDefaultLang(this.defaultLanguage);
  }

  setLanguage(language?: string) {
    if (language && language !== 'bw') {
      this.language = language;
    } else if (navigator.language.indexOf('es') !== -1) {
      this.language = 'es';
    }
    this.translate.use(this.language);
  }

  getLanguage() {
    return this.language;
  }
}
