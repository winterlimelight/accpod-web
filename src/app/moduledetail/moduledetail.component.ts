import { Component, OnInit, Input } from '@angular/core';
import { ModuleAction } from '../types'

@Component({
  selector: 'app-moduledetail',
  templateUrl: './moduledetail.component.html',
  styleUrls: ['./moduledetail.component.css']
})
export class ModuledetailComponent implements OnInit {
  @Input() moduleaction: ModuleAction;

  constructor() { }

  ngOnInit() {
  }

}
