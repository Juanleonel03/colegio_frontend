import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormsModule]
})
export class CambiarContrasenaComponent implements OnInit {
  @Input() usuario: Usuario | undefined;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nuevaContrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', [Validators.required]]
    }, { validators: this.matchPasswords });

    const idUsuario = Number(localStorage.getItem('id_usuario'));
    if (idUsuario) {
      this.usuarioService.buscarPorId(idUsuario).subscribe((data: Usuario) => {
        this.usuario = data;
      });
    } else {
      console.error("id_usuario no encontrado");
    }
  }

  matchPasswords(group: FormGroup) {
    const nueva = group.get('nuevaContrasena')?.value;
    const confirmar = group.get('confirmarContrasena')?.value;
    return nueva === confirmar ? null : { noCoincide: true };
  }

  async cambiarContrasena() {
    if (this.formulario.invalid || !this.usuario?.id_usuario) {
      console.error('Formulario inválido o id_usuario no definido');
      return;
    }

    const nuevaContrasena = this.formulario.value.nuevaContrasena;

    this.usuarioService.actualizarContrasena(this.usuario, nuevaContrasena).subscribe({
      next: async () => {
        const alert = await this.alertCtrl.create({
          header: 'Éxito',
          message: 'Contraseña actualizada correctamente',
          buttons: ['OK']
        });
        await alert.present();
        this.formulario.reset();
      },
      error: async err => {
        console.error('Error al cambiar la contraseña:', err);
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'No se pudo actualizar la contraseña',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
}
