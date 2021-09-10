import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  registerUser(data){
    return this.http.post(environment.apiURL+'register-users', data);
  }

  loginUser(data){
    return this.http.post(environment.apiURL+'login', data);
  }

  example(){
    return this.http.get(environment.apiURL+'example');
  }

  getAllUsers(){
    return this.http.get(environment.apiURL+'users');
  }

  /**
   * El mejor equipo
   */
  getElMejorEquipo(){
    return this.http.get(environment.apiURL+'el-mejor-equipo-todos');
  }
  getProdeli(){
    return this.http.get(environment.apiURL+'prodeli-todos');
  }


  getExcelencia(){
    return this.http.get(environment.apiURL+'excelencia-todos');
  }
  /**
   * 
   */
   editUser(data){
    return this.http.post(environment.apiURL+'edit-users', data);
  }

  editPassword(data){
    return this.http.post(environment.apiURL+'edit-password', data);
  }

  /**
   * Información que cura
   */
  informacionquecura(){
    return this.http.get(environment.apiURL+'/salud/informacion-que-cura');
  }

  parqueteanimes(){
    return this.http.get(environment.apiURL+'/salud/para-que-te-animes');
  }

  convenios(){
    return this.http.get(environment.apiURL+'/salud/convenios');
  }



  picture(data){
    return this.http.post(environment.apiURL+'edit-profileimage', data);
  }
}
