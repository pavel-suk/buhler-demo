import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    HeaderComponent, RouterOutlet,
  ],
  template: `
    <app-header/>
    <main class="flex-[1]">
      <router-outlet/>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-full'
  }
})
export default class DefaultLayoutComponent { }
