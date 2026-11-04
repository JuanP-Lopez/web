import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Preferences Types
import type { userPreferencesRequest } from "../models/user-preferences.models";

@Injectable({
    providedIn: 'root'
})

export class UserPreferencesService {

    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5021/api/user'

    setPreferences (data : userPreferencesRequest) : Observable<void> {
        return this.http.post<void>(
            `${this.apiUrl}/setPreferences`,
            data,
            { withCredentials : true }
        );
    }

    getPreferences(): Observable<userPreferencesRequest> {
    return this.http.get<userPreferencesRequest>(
        `${this.apiUrl}/preferences`,
        { withCredentials: true }
    );
}
}