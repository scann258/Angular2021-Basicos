import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];

  borrarHeroe( idx: number, heroe: string ) {

    console.log(`Heroe ${ heroe } borrado`);
    
    this.heroes.splice(idx,1);   

  }


}
