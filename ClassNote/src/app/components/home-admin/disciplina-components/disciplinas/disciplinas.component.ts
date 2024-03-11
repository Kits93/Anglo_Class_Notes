import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PopoverController } from '@ionic/angular';
import { Disciplina } from 'src/app/models/disciplina.model';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { FormNewDisciplinaComponent } from '../form-new-disciplina/form-new-disciplina.component';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss'],
})
export class DisciplinasComponent implements OnInit {
  dataSource!: MatTableDataSource<Disciplina>;
  displayedColumns: string[] = ['Disciplina', 'edit_create', 'delete'];
  disciplinasListadas: Disciplina[] = [];

  constructor(private disciplinaService: DisciplinaService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Disciplina>([]); // Inicializa com um array vazio de UserData
    this.listarDisciplinas();
  }

  listarDisciplinas() {
    this.disciplinaService.read().subscribe((dados: any) => {
      if (dados && dados.success === 1 && dados.disciplinas) {
        this.disciplinasListadas = dados.disciplinas; // Correção aqui
        this.dataSource.data = this.disciplinasListadas;
      } else {
        this.disciplinasListadas = [];
        this.dataSource.data = [];
        console.error('Erro ao carregar Disciplinas.');
      }
    });
  }

  async openNewFormPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: FormNewDisciplinaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
