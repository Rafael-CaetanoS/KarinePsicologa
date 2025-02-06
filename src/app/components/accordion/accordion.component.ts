import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() accordionId: string = '';
  @Input() headingId: string = '';
  @Input() collapseId: string = '';
  @Input() title: string = 'Accordion Item';
}
