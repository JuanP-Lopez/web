import { Component } from "@angular/core";

/* Logic Components */
import { ThemeToggle } from "../../../features/theme-toggle/theme-toggle";
import { IdiomToggle } from "../../../features/idiom-toggle/idiom-toggle";

/* UI Components */
import { SignUpForm } from "../../../features/signup/signup-form/signup-form";

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ThemeToggle, IdiomToggle, SignUpForm],
    template:`
        <main class="flex flex-col w-full h-[100vh] bg-[var(--color-background)]">

            <div class="flex flex-row m-4 gap-2 ml-auto">
                <app-theme-toggle />
                <app-idiom-toggle /> 
            </div>

            <div class="flex flex-col w-full h-full items-center justify-center">

                <app-signup-form class="w-[40%]"/>
                <span class="m-4 font-medium">Si ya tienes una cuenta, da <a href="/login" class="text-[var(--color-secondary)]">clic aquí</a>.</span>

            </div>

        </main>
    `,
    styleUrl: './signup.css',
})

export class SignUp {

 };