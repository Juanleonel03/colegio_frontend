import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule]
})
export class RegisterPage {
  registerForm: FormGroup;
  roles = [
    { id: 2, nombre: 'Administrativo' },
    { id: 3, nombre: 'Profesor' },
    { id:  4, nombre: 'Estudiante' },
    { id: 1, nombre: "Administrador" }
  ];

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password, nombre, correo, rol, cedula, fecha_nac } = this.registerForm.value;
    this.auth.register({
      nombre,
      cedula,
      fecha_nac,
      username,
      password,
      correo,
      rol
    }).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
