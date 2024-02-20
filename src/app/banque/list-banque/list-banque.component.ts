import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BanqueService } from '../../services/banque.service';

@Component({
  selector: 'app-list-banque',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-banque.component.html',
  styleUrl: './list-banque.component.css'
})
export class ListBanqueComponent implements OnInit {
  banques: any;
  constructor(private banqueService: BanqueService, private router: Router) {
  }

  ngOnInit(): void {
    //prepare les data
    
    this.refreshData();
  }

  deleteBanque(banque: any) {
    //alert(banque.nom);

    this.banqueService.deleteBanque(banque).subscribe(

      response => {
        alert("Suppresion avec succès");
        this.refreshData();
      },

      error => console.log(error + "Problème dans l'API")
    );
  }

  refreshData() {
    this.banqueService.getBanques().subscribe(

      response => this.banques = response,

      error => console.log(error + "Problème dans l'API")
    );
  }

  updateBanque(banque: any){

    this.router.navigate(['banques' + '/update/' + banque.id]);
  }
}
