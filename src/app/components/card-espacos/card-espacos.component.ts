import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-espacos',
  standalone: true,
  imports: [],
  templateUrl: './card-espacos.component.html',
  styleUrl: './card-espacos.component.css'
})
export class CardEspacosComponent {
@Input()
imagem?:string;
}
