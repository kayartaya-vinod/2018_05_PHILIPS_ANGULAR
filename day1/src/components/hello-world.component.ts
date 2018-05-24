import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    templateUrl: './hell-world.html'
})
export class HelloComponent {
    public message: string;

    constructor() {
        this.message = 'Hello, World!';
    }
}