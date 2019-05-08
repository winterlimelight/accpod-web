import { Component } from '@angular/core';
import { ModuleAction, Module } from './types';
import { SelectedModuleActionEvent } from './modulemenu/modulemenu.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    module: Module;
    selectedModuleAction: ModuleAction;

    onTaskSelected($event: SelectedModuleActionEvent) {
        this.module = $event.module;
        this.selectedModuleAction = $event.action;
    }
}
