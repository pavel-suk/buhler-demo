import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MachineCardComponent } from '@components/machine-card/machine-card.component';
import { MachineService } from '@services/machine.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MachineCardComponent,
  ],
  templateUrl: `./overview.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OverviewPageComponent { 

  protected readonly mService = inject(MachineService);

  protected readonly machineData = computed(() => {
    return this.mService.data();
  })
}
