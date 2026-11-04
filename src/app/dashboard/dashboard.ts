import { Component, inject, signal, OnInit } from "@angular/core";

//Services
import { AuthStateService } from "../core/services/authstate.service";
import { UserStatisticsService } from "../core/services/user-statistics.service";
import { UserPreferencesService } from "../core/services/user-preferences.service";

//Interfaces
import { UserStatistics } from "../core/models/user-statistics";
import { userPreferencesRequest } from "../core/models/user-preferences.models";

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

                <div class="leftbar">
                    <app-statistics [statistics]="statistics()"/>
                    <app-automation-menu />
                </div>
                
                <div class="chat">
                    <app-chat/>
                </div>

                <div class="rightbar">
                    <app-messages-count [statistics]="statistics()"/>

                    <app-user-preferences [preferences]="preferences()"/>
                </div>

            </div>

        </main>
    `,
    styleUrl: './dashboard.css',
})

export class Dashboard {

    private statisticsService = inject(UserStatisticsService);
    private prefencesService = inject(UserPreferencesService);
    private authState = inject(AuthStateService);

    user = this.authState.user;
    statistics = signal<UserStatistics | null>(null);
    preferences = signal<userPreferencesRequest | null>(null);
    isLoadingPreferences = signal(true);

    loadPreferences () : void {
        this.prefencesService.getPreferences().subscribe({
            next : (response) => {
                this.preferences.set(response);
                console.log(response);
                this.isLoadingPreferences.set(false);
            },
            error : (error) => {
                console.error("Error loading prefences: ", error);
                this.isLoadingPreferences.set(false);
            }
        })
    }

    ngOnInit () : void {
        this.statisticsService.getUserStatistics().subscribe({
            next : (data) => {
                this.statistics.set(data);
                console.log("User Statistics: ", data);
            },
            error : (error) => {
                console.error("Error retrieving statistics: ", error);
            }
        });
        this.loadPreferences();
    }

 };