import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MACHINE_STATE } from '@models/machine-state.enum';
import { Machine } from '@models/machine.interface';

@Component({
  selector: 'app-machine-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './machine-card.component.html',
  styles: `
    :host[data-status=${MACHINE_STATE.RUNNING}] {
      @apply bg-[#dcdcdc];
    }
    :host[data-status=${MACHINE_STATE.ALARM}] {
      @apply bg-red-600;
      @apply text-white
    }
    :host[data-status=${MACHINE_STATE.WARNING}] {
      @apply bg-orange-400;
      @apply text-white
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "relative w-auto flex flex-col items-center py-2 px-8",
    "[attr.data-status]": "machine().state"
  }
})
export class MachineCardComponent {

  readonly MACHINE_STATE = MACHINE_STATE;

  readonly machine = input.required<Machine>();

  readonly showMainIcon = input.required({
    transform: booleanAttribute
  });
}
