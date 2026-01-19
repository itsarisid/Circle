import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  imports: [],
  template: `
    <a href="/" class="logodark flex items-center">
      <img
        src="./assets/images/logos/dark-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
      <span class="text-xl font-bold text-foreground">Circle</span>
    </a>

    <a href="/" class="logolight flex items-center">
      <img
        src="./assets/images/logos/light-logo.svg"
        class="align-middle m-2"
        alt="logo"
      />
      <span class="text-xl font-bold text-white">Circle</span>
    </a>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
  constructor(private settings: CoreService) { }
}
