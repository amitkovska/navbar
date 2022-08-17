import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: string[] = [
    'home',
    'profile',
    'setings'
  ];
  public isCollapsed = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'mk']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
