import { GumballMachine } from '../GumballMachine';
import { IState } from '../interfaces/State';

export class SoldOutState implements IState {
  gumballMachine: GumballMachine;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }
  insertQuarter = (): void => console.log('You cannot insert another coin');
  ejectQuarter = (): void => {
    console.log('Coin Ejected');
    // this.gumballMachine.SetState(this.gumballMachine.noQuarterState)
  };
  turnCrank: () => void;
  dispense: () => void;
}
