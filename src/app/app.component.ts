import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple';
  initCounter = 100500;
  style: any = {
    backgroundColor: 'red',
    color: 'blue',
    display: 'block'
  }
  btnText = 'скрыть'

  toogleDisplay() {
    if (this.style.display === 'none') {
      this.style.display = 'block'
      this.btnText = 'Скрыть'
    } else {
      this.style.display = 'none'
      this.btnText = 'Показать'
    }
  }

  /* decCounter(value: number) {
    this.incCounter = this.incCounter - value
  }

  incCounter(value: number) {
    this.incCounter = this.incCounter + value
  } */
}
