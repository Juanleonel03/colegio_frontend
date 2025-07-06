import { Component, Input, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante.model';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ServicesCongif } from 'src/app/services/logout.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from '../perfil/perfil.component';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';
import { TramiteComponent } from '../tramite/tramite.component';
import { MatriculaComponent } from '../matricula/matricula.component';
import { ReclamoComponent } from '../reclamo/reclamo.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { ProfesoresComponent } from '../profesores/profesores.component';
import { NotasComponent } from '../notas/notas.component';
import { PagoComponent } from '../pago/pago.component';
import { RecibosComponent } from '../recibos/recibos.component';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-dashboard-estudiante',
  templateUrl: './dashboard-estudiante.page.html',
  styleUrls: ['./dashboard-estudiante.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  ReactiveFormsModule,
  PerfilComponent,
  CambiarContrasenaComponent,
  TramiteComponent,
  MatriculaComponent,
  ReclamoComponent,
  InformacionComponent,
  ProfesoresComponent,
  NotasComponent,
  PagoComponent,
  RecibosComponent,
  CambiarContrasenaComponent
]

})
export class DashboardEstudiantePage implements OnInit {
  estudiante?: Estudiante;
  usuario?: Usuario;
  formPerfil!: FormGroup;
  editando = false;

  // NUEVAS PROPIEDADES
  nombre: string = '';
  rol: string = '';
  seccionActiva: string = '';
  puedeMatricular: boolean = false;

  constructor(
    private estudianteService: EstudianteService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private servicesConfig: ServicesCongif
  ) {}

  ngOnInit() {
    const idEstudiante = Number(localStorage.getItem('id_estudiante'));
    this.nombre = localStorage.getItem('nombre') ?? 'Estudiante';
    this.rol = localStorage.getItem('rol') ?? '';
    this.puedeMatricular = localStorage.getItem('puedeMatricular') === 'true';

    if (idEstudiante) {
      this.estudianteService.obtenerEstudiantePorId(idEstudiante).subscribe((data) => {
        this.estudiante = data;
        this.formPerfil = this.fb.group({
          nombre: [data.nombre],
          cedula: [data.cedula],
          fecha_nac: [data.fecha_nac],
          correo: [data.correo],
        });
      });
    }
  }

  habilitarEdicion() {
    this.editando = true;
  }

  async guardarCambios() {
    if (!this.estudiante) return;

    const actualizado: Estudiante = {
      ...this.estudiante,
      ...this.formPerfil.value,
    };

    this.estudianteService.actualizarEstudiante(actualizado).subscribe(async () => {
      this.editando = false;
      const alert = await this.alertCtrl.create({
        header: 'Éxito',
        message: 'Perfil actualizado correctamente',
        buttons: ['OK'],
      });
      await alert.present();
    });
  }

  // NUEVO: Cambiar la sección activa del contenido
  seleccionarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }

  logout() {
    this.servicesConfig.logout();
  }
}
