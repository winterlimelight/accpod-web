import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModuleService } from './module.service';
import { HeaderComponent } from './header/header.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { ModulemenuComponent } from './modulemenu/modulemenu.component';
import { ModuledetailComponent, KeepHtmlPipe } from './moduledetail/moduledetail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UsermenuComponent,
        ModulemenuComponent,
        ModuledetailComponent,
        KeepHtmlPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ModuleService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
