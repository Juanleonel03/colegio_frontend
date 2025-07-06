import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }


  actualizarContrasena(usuario: Usuario, nuevaContrasena: string){
    return this.http.patch(`${this.apiUrl}/id/${usuario.id_usuario}`, { password: nuevaContrasena });
  }
  buscarPorCorreo(correo: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/correo/${correo}`);
  }
  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/id/${id}`);
  }
}
