import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p> hello, this is angular, avite </p>
  <h1 class="text-3xl font-bold underline">
      Hello Tailwind inside angular!
  </h1>
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
  constructor() {}

  ngOnInit(): void {}
}
