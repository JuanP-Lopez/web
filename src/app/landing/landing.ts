import { Component } from "@angular/core";
import { Navbar } from "../../../features/commercial/navbar/navbar";
import { ThemeToggle } from "../../../features/theme-toggle/theme-toggle";
import { IdiomToggle } from "../../../features/idiom-toggle/idiom-toggle";

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [Navbar, ThemeToggle, IdiomToggle],
    template:`
        <main class="flex flex-col w-full">
            <app-navbar/>

            <div class="flex flex-row m-2 gap-2 ml-auto">
                <app-theme-toggle/>
                <app-idiom-toggle/> 
            </div>

        </main>
    `,
    styleUrl: './landing.css',
})

export class Landing { };