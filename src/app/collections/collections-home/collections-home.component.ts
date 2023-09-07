import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Basima', age: 37, job: 'Engenier' },
    { name: 'Ahmad', age: 37, job: 'Developpeur' },
    { name: 'Bassam', age: 10, job: 'Student' },
    { name: 'abd', age: 8, job: 'Student' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
