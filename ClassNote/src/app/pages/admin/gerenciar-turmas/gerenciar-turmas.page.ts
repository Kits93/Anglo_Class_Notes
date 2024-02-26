import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gerenciar-turmas',
  templateUrl: './gerenciar-turmas.page.html',
  styleUrls: ['./gerenciar-turmas.page.scss'],
})
export class GerenciarTurmasPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
