import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicosComponent } from "./components/card-servicos/card-servicos.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { CardEspacosComponent } from "./components/card-espacos/card-espacos.component";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardServicosComponent, AccordionComponent, CardEspacosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.responsividade.css']
})
export class AppComponent implements AfterViewInit {
  title = 'karinewebsite';
  
  ngAfterViewInit(): void {
    AOS.init();
  }

  mostrarConteudoExtra: boolean = false;

  toggleConteudoExtra() {
    this.mostrarConteudoExtra = !this.mostrarConteudoExtra;
  }



}
