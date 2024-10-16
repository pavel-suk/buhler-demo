import { MACHINE_STATE } from "./machine-state.enum";

export interface Machine {
    name: string;
    state: MACHINE_STATE;
    icon: string;
}