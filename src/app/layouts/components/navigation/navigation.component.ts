import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MachineCardComponent } from '@components/machine-card/machine-card.component';
import { MachineService } from '@services/machine.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
   MachineCardComponent
  ],
  template: `
  <section class="flex h-full items-center">
      @for(machine of machineData(); track machine) {
          <app-machine-card [machine]="machine" showMainIcon="false"></app-machine-card>
      }
  </section>
`,
  styleUrl: './navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  protected readonly mService = inject(MachineService);

  protected readonly machineData = computed(() => {
    return this.mService.data();
  })
 }
