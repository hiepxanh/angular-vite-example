import { otherAction } from './other';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = 'Hello world';
otherAction();


import "@angular/compiler";
import "zone.js";
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgZone } from '@angular/core';
import './index.css'

bootstrapApplication(AppComponent, {
    providers: [
        {
            provide: NgZone,
            useValue: new NgZone({ shouldCoalesceEventChangeDetection: false })
        },
    ]
});