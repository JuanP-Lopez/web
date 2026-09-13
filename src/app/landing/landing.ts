import { Component } from "@angular/core";

/* Logic Components */
import { ThemeToggle } from "../../../features/theme-toggle/theme-toggle";
import { IdiomToggle } from "../../../features/idiom-toggle/idiom-toggle";

/* UI Components */
import { Navbar } from "../../../features/commercial/navbar/navbar";
import { SocialLinks} from "../../../features/commercial/social-links/social-links";
import { Smartphone } from "../../../features/commercial/smartphone/smartphone";
import { Carousel } from "../../../features/commercial/carousel/carousel";
import { ReviewCard } from "../../../features/commercial/review-card/review-card";
import { Footer } from "../../../features/commercial/footer/footer";

import { slides } from "../../../features/commercial/carousel/carousel.data";
import { reviews } from "../../../features/commercial/review-card/review.data";

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [Navbar, ThemeToggle, IdiomToggle, SocialLinks, Smartphone, Carousel, ReviewCard, Footer],
    template:`
        <main class="flex flex-col w-full">
            <app-navbar/>

            <div class="flex flex-row m-4 gap-2 ml-auto">
                <app-theme-toggle/>
                <app-idiom-toggle/> 
            </div>

            <div class="flex items-center justify-between w-full h-[30em]">

                <app-social-links/>

                <div class="slogan">
                    <span class="text-[var(--color-text)]">Mucho más que un chat</span>
                    <h1 class="text-[var(--karina-accent)]">Karina</h1>
                    <span class="text-[var(--color-text)]">Conversa, genera, recuerda y automatiza</span>
                </div>

                <div>
                    <app-smartphone />
                </div>
            </div>

            <div class="w-full h-full p-20 bg-[var(--color-surface)]">
                <app-carousel [slides]="slides"/>
            </div>

            <div class="flex flex-row m-4 gap-[2em] items-center">

                @for (review of reviews; track review.name) {
                    <app-review-card [review]="review" class="transition-transform duration-300 ease-in-out hover:-translate-y-2"/>
                }
                
            </div>

            <div>

                <app-footer  class="w-full"/>

            </div>

        </main>
    `,
    styleUrl: './landing.css',
})

export class Landing {

    slides = slides;
    reviews = reviews;

 };