


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

// import { otherAction } from './other';

async function lazyOther () {
    const { otherAction } = await import('./other');
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = 'Hello world';
    otherAction();
}

if (false) {
    lazyOther();
}