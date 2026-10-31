import { Component, inject } from "@angular/core";

//AuthStateService
import { AuthStateService } from "../core/services/authstate.service";

/* Logic Components */
import { ThemeToggle } from "../../../features/theme-toggle/theme-toggle";
import { IdiomToggle } from "../../../features/idiom-toggle/idiom-toggle";

/* UI Components */
import { MessagesCount } from "../../../features/dashboard/messages-count/messages-count";
import { UserPreferences } from "../../../features/dashboard/user-preferences/user-preferences";
import { AutomationMenu } from "../../../features/dashboard/automation-menu/automation-menu";
import { Statistics } from "../../../features/dashboard/statistics/statistics";
import { Chat } from "../../../features/dashboard/chat/chat";
 
@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ThemeToggle, IdiomToggle, AutomationMenu, Statistics, MessagesCount, UserPreferences, Chat],
    template:`
        <main class="flex flex-col w-full h-[100vh] bg-[var(--color-background)] overflow-hidden">

            <div class="flex flex-row m-4 gap-2 ml-auto items-center">
                
                @if (user(); as currentUser) {
                    <span class="text-lg font-medium">Bienvenido, {{ currentUser.name }}</span>
                } @else {
                    <span class="text-lg font-medium">Bienvenido, usuario sin identificar</span>
                }

                <app-theme-toggle/>
                <app-idiom-toggle/> 
            </div>

            <div class="wrapper">

                <div class="leftbar justify-between">
                    <app-statistics/>
                    <app-automation-menu />
                </div>
                
                <div class="chat">
                    <app-chat/>
                </div>

                <div class="rightbar">
                    <app-messages-count />

                    <app-user-preferences />
                </div>

            </div>

        </main>
    `,
    styleUrl: './dashboard.css',
})

export class Dashboard {

    private authState = inject(AuthStateService);

    user = this.authState.user;

 };