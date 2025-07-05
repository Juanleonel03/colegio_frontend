import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'

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
    private router: Router
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
        console.log('Login exitoso:', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);


        // Redirigir según el rol
        switch (res.rol) {
          case 'Administrativo':
            this.router.navigate(['/dashboard-administrativo']);
            break;
          case 'Profesor':
            this.router.navigate(['/dashboard-profesor']);
            break;
          case 'Estudiante':
            this.router.navigate(['/dashboard-estudiante']);
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
