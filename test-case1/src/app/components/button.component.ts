import { Component } from '@angular/core';
import { iconsArr } from '../icons/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.conponent.html',
})
export class ButtonComponent {
  icon = '';
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  showIcon(): void {
    setTimeout(() => {
      const rundomNum = this.getRandomInt(iconsArr.length);
      this.icon = iconsArr[rundomNum];
    }, 3000);
  }
}
