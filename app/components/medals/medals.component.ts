import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ao-medals',
  templateUrl: 'app/components/medals/medals.component.html'
})
export class MedalsComponent {

  constructor(
    private router: Router) {
  }

}
