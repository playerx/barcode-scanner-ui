/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { translations } from './app.lang';
import { getFlagEmoji } from './common/getFlagEmoji';

const languages = Object.keys(translations).map((x) => ({
  code: x.toUpperCase(),
  emoji: getFlagEmoji(x),
}));

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  lang = 'US';
  languages = languages;

  get L(): any {
    return translations[this.lang] ?? translations.US;
  }

  constructor() {
    const lang = location.hash.slice(1, 3).toUpperCase();
    this.lang = translations[lang] ? lang : 'US';
  }

  changeLang(code: string) {
    this.lang = code.toUpperCase();
    location.hash = code.toUpperCase();
  }

  shareTweet() {
    const message = encodeURIComponent(
      'Scan Products and #STOPRUSSIA ' + ' https://stoprussia.app'
    );

    window.open('https://twitter.com/intent/tweet?text=' + message);
  }
}
