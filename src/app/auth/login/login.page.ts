import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { EstudianteService } from 'src/app/services/estudiante.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule]
})
export class LoginPage {
  loginForm: FormGroup;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private estudianteService: EstudianteService,
    private usuarioService: UsuarioService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);

        switch (res.rol) {
          case 'Administrativo':
            this.router.navigate(['/dashboard-administrativo']);
            break;
          case 'Profesor':
            this.router.navigate(['/dashboard-profesor']);
            break;
          case 'Estudiante':

            this.estudianteService.buscarPorCorreo(res.correo).subscribe(estArray => {
              if (estArray && estArray.length > 0) {
                const est = estArray[0];
                localStorage.setItem('id_estudiante', est.id_estudiante.toString());

                // 🔽 Aquí pegamos la llamada a usuarioService
                this.usuarioService.buscarPorCorreo(res.correo).subscribe(usuarioArr => {
                  if (usuarioArr && usuarioArr.length > 0) {
                    const usuario = usuarioArr[0];
                    /* console.log("Usuario encontrado:", usuario); */
                    localStorage.setItem('id_usuario', String(usuario.id_usuario));

                    // 🔚 Luego de guardar ambos IDs, redirige
                    this.router.navigate(['/dashboard-estudiante']);
                  } else {
                    console.error('No se encontró usuario para el correo:', res.correo);
                    this.errorMsg = 'No se encontró usuario asociado';
                  }
                });

              } else {
                console.error('No se encontró estudiante para el correo:', res.correo);
                this.errorMsg = 'No se encontró estudiante asociado';
              }
            });

            break;
          case 'Administrador':
            this.router.navigate(['/dashboard-admin'])
            break;
          default:
            this.errorMsg = 'Rol no reconocido: ' + res.rol;
        }
      },
      error: () => {
        this.errorMsg = 'Credenciales inválidas';
      },
    });
  }
}
