import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

const banqueUrl = environment.baseUrl + "/banques";

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private http:HttpClient) { }

  getBanques() {
    return this.http.get(banqueUrl + "/list"); // consommation d'une api rest
  }

  addBanque(banque: any) {
    return this.http.post(banqueUrl + "/list", banque); // consommation d'une api rest
  }

  deleteBanque(banque: any) {
    return this.http.delete(banqueUrl + "/delete/" + banque.id); // consommation d'une api rest
  }

  getBanque(id: any) {
    console.log(id);
    
    return this.http.get(banqueUrl + "/update/" + id); // consommation d'une api rest
  }

  updateBanque(banque: any) {
    return this.http.put(banqueUrl + '/list',  banque); // consommation d'une api rest
  }
}
