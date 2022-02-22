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
  lang = 'us';
  languages = languages;

  get L(): any {
    return translations[this.lang] ?? translations.us;
  }

  constructor() {
    const lang = location.hash.slice(1, 3).toLowerCase();
    this.lang = translations[lang] ? lang : 'us';
  }

  changeLang(code: string) {
    this.lang = code.toLowerCase();
    location.hash = code.toUpperCase();
  }

  shareTweet() {
    const message = encodeURIComponent(
      'Scan Products and #STOPRUSSIA ' + ' https://stoprussia.app'
    );

    window.open('https://twitter.com/intent/tweet?text=' + message);
  }
}
