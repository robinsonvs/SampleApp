import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-errors',
  templateUrl: './item-errors.component.html',
  styleUrls: ['./item-errors.component.css']
})
export class ItemErrorsComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
