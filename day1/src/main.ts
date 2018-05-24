import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HelloComponent } from './components/hello-world.component';

@NgModule({
    declarations: [
        // list of all components, pipes and directives
        HelloComponent
    ],
    imports: [
        // list of all other modules that this module depends on
        BrowserModule
    ],
    bootstrap: [
        // list of all compoents that may appear in the index.html
        HelloComponent
    ]
})
class HelloModule {}

platformBrowserDynamic().bootstrapModule(HelloModule);