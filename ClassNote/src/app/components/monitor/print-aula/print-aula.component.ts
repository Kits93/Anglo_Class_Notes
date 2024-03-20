import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-aula',
  templateUrl: './print-aula.component.html',
  styleUrls: ['./print-aula.component.scss'],
})
export class PrintAulaComponent  implements OnInit {

  @Input() Aula: any;

  constructor() { }

  ngOnInit() {
    console.log(this.Aula)
  }

}
