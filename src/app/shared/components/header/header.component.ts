import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [TranslateModule],
})
export class HeaderComponent {
  constructor(
    public translate: TranslateService,
    private AuthService: AuthService
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target?.value?.trim().toLowerCase() || 'en';

    if (lang === 'en' || lang === 'ar') {
      this.translate.use(lang);
    } else {
      this.translate.use('en');
    }
  }

  logout() {
    this.AuthService.logout();
  }
}
