/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { translations } from './app.lang';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lang: 'ka' | 'en' = 'en';

  get L(): any {
    return translations[this.lang] ?? translations.en;
  }

  constructor() {
    this.lang = window.location.pathname.includes('ka') ? 'ka' : 'en';
  }

  shareTweet() {
    const message = encodeURIComponent(
      'Scan Products and #STOPRUSSIA ' + ' https://stoprussia.app'
    );

    window.open('https://twitter.com/intent/tweet?text=' + message);
  }
}
