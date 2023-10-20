import { Component, Input } from '@angular/core';
import { Annotation } from 'src/app/types/dandelion-types';

@Component({
  selector: 'app-entity-modal',
  templateUrl: './entity-modal.component.html',
})
export class EntityModalComponent {

  @Input() entity: Annotation = {} as Annotation;

  constructor() { }

  ngOnInit(): void {
  }

}
