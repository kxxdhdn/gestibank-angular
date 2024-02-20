import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BanqueService } from '../../services/banque.service';

@Component({
  selector: 'app-add-banque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-banque.component.html',
  styleUrl: './add-banque.component.css'
})
export class AddBanqueComponent {

  constructor(private banqueService: BanqueService, private router:Router) {
  }

  createBanque(formAddBanque: any){
    // console.log(formAddBanque.value);
    this.banqueService.addBanque(formAddBanque.value).subscribe(
      data =>
        {
          //console.log(data);
          alert("Ajout avec succès");
          this.router.navigate(["banques"]);  // redirection vers le composant listBanque une fois insertion dans la base
        }
    );
  }
}
