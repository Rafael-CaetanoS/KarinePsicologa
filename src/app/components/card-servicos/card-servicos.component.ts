import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servicos',
  standalone: true,
  imports: [],
  templateUrl: './card-servicos.component.html',
  styleUrl: './card-servicos.component.css'
})
export class CardServicosComponent {
 @Input()
 titulo?:string;
 @Input()
 descricao?:string;
//  @Input()
//  informacao?:string ;

}
