import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html'
})

export class DynamicComponent {
  name = '';

  constructor(route: ActivatedRoute) {
    console.log(route)

    route.params.subscribe((params) => {
        this.name = params['name']
    })
  }
}
