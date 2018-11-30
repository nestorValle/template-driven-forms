import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  languages = ['English', 'Spanish', 'Portuges'];
  model = new Employee('daniel', 'valle', true, 'ws', '');
  constructor() {}

  ngOnInit() {}
}
