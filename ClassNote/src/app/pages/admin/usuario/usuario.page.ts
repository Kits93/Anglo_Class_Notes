import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular'; // Importe o PopoverController
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  id_user: any;
  userData: any;
  UserForm!: FormGroup;
  popoverController!: PopoverController;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController // Injete o PopoverController no construtor
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id_user = params['id_user'];
      this.getUserDados();
    });

    this.createFormAdd();
  }

  getUserDados() {
    this.usuarioService.readOne(this.id_user).subscribe((dados: any) => {
      console.log(dados);
      if (dados.success && dados.usuario) {
        this.userData = dados.usuario;
        this.updateFormValues();
      }
    });
  }

  createFormAdd() {
    this.UserForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  updateFormValues() {
    this.UserForm.patchValue({
      username: this.userData.username,
      email: this.userData.email,
      role: this.userData.role,
      password: ''
    });
  }

  saveUserData() {
    const form = this.UserForm.value;
    console.log(form);

    // Chama o serviço para enviar os dados do usuário para a API PHP
    // this.usuarioService.update(form).subscribe(response => {
    // Lógica para lidar com a resposta da API, se necessário
    // });
  }

  changePassword() {
    // Implemente a lógica para alterar a senha do usuário
  }

  async openChangePasswordPopover() {
    const popover = await this.popoverCtrl.create({ // Corrija o nome da variável para popoverCtrl
      component: ChangePasswordComponent,
      translucent: true,
      componentProps: {
        // Passe quaisquer dados necessários para o componente de alteração de senha aqui
      }
    });
    return await popover.present();
  }
}
