import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule, ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MatRadioModule } from '@angular/material/radio';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';

@Component({
  selector: 'app-form-new-usuario',
  templateUrl: './form-new-usuario.component.html',
  styleUrls: ['./form-new-usuario.component.scss'],
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
export class FormNewUsuarioComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private comunicationService: ComunicationService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  createUser(form: any) {
    if (form.valid) {
      console.log(form.value);
      this.usuarioService.create(form.value).subscribe(
        (response) => {
          console.log('Usuário criado com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
        }
      );
      this.comunicationService.fecharModal();
      this.back()
    } else {
      console.log('Formulário inválido');
    }
  }

  back() {
    this.modalCtrl.dismiss()
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials;
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
