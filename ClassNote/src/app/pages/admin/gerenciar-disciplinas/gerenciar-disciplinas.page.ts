import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gerenciar-disciplinas',
  templateUrl: './gerenciar-disciplinas.page.html',
  styleUrls: ['./gerenciar-disciplinas.page.scss'],
})
export class GerenciarDisciplinasPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}


