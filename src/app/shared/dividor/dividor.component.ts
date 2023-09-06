import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dividor',
  templateUrl: './dividor.component.html',
  styleUrls: ['./dividor.component.css'],
})
export class DividorComponent {
  @Input() title = '';
}
