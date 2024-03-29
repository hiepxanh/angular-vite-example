import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <p> hello, this is angular, avite </p>
  <a routerLink="/" href="#" class="text-xl font-bold no-underline hover:underline ...">Home | </a>
  <a routerLink="/about-us" href="#" class="text-xl font-bold no-underline hover:underline ...">About us</a>
  <hr>
  <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    console.log("known issue: templateUrl not working on this version. You should try inline template which was commented")
  }

  ngOnInit(): void {}
}
