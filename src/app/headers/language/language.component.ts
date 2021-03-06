import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/localization/language';
import { LocalizationService } from 'src/app/core/localization/localization.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  languages: Language[] = [
    { id: 1, name: 'English', tag: 'en-US' },
    { id: 2, name: 'ქართული', tag: 'ka-GE' }
  ];

  showLanguage: boolean = false;

  get currentLanguageUrl() {
    return `/assets/icons/flag-${this.localizationService.currentLanguage.tag}.png`
  }

  constructor(private readonly localizationService: LocalizationService) { }

  ngOnInit(): void {
  }

  showLanguageClick() {
    this.showLanguage = !this.showLanguage
  }

  selectLanguage(language: Language) {
    this.localizationService.setLanguage(language)
  }

}
