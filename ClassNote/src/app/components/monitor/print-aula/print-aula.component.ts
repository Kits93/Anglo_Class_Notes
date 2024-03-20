import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-print-aula',
  templateUrl: './print-aula.component.html',
  styleUrls: ['./print-aula.component.scss'],
})
export class PrintAulaComponent implements OnInit {

  @Input() Aula: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.Aula)
  }

  goBack() {
    this.modalCtrl.dismiss()
  }

  print(){
    window.print()
  }

}
