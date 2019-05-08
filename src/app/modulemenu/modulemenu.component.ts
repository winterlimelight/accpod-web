import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModuleService } from '../module.service';
import { Module, ModuleAction } from '../types';

export class SelectedModuleActionEvent {
  module: Module;
  action: ModuleAction;
}

@Component({
  selector: 'app-modulemenu',
  templateUrl: './modulemenu.component.html',
  styleUrls: ['./modulemenu.component.css']
})
export class ModulemenuComponent implements OnInit {

  module: Module;
  selectedId: string;

  @Output() selectedModuleAction = new EventEmitter<SelectedModuleActionEvent>();

  constructor(private moduleService: ModuleService) {  }

  async ngOnInit() {
    this.module = await this.moduleService.getData();
  }

  onTaskClick(action: ModuleAction) {
    this.selectedId = action.moduleActionID;
    this.selectedModuleAction.emit({ module: this.module, action: action });    
  }
}
