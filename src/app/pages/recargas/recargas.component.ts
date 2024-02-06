import { Component, OnInit } from '@angular/core';
import { Operadora } from 'src/app/domain/operadora';
import { OperadorasService } from 'src/app/services/operadoras.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {
  operadoras: any;
  operadora: Operadora = new Operadora();
  numeroTelefono: string = '';
  valorRecarga: number = 0;
  seleccion: boolean = false;

  constructor(private operadorasServices: OperadorasService) {}

  ngOnInit(): void {
    this.operadoras = this.operadorasServices.getOperadoras();
  }

  operadoraID(idOpera: number): void {
    this.operadorasServices.getOperadorasById(idOpera).subscribe(resp => {
      console.log(resp); 
      this.seleccion = true; 
    });
  }

  hacerRecarga() {
    if (this.seleccion) { 
      if (this.numeroTelefono.trim() !== '' && this.valorRecarga !== 0) { 
        alert('Número de celular: ' + this.numeroTelefono + 
        '\nValor de la recarga: ' + this.valorRecarga);
      } else {
        alert('Por favor llene los campos vacios.');
      }
    } else {
      alert('Por favor, primero seleccione un código de operadora.');
    }
  }
}
