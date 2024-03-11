import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-new-disciplina',
  templateUrl: './form-new-disciplina.component.html',
  styleUrls: ['./form-new-disciplina.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    IonicModule // Adicione IonicModule aos imports
  ],
})
export class FormNewDisciplinaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
