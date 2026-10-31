import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Auth Types
import type { signUpRequest, signInRequest, authResponse, authUser } from "../models/auth.models";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5021/api/auth'

    signUp (data : signUpRequest) : Observable<void> {
        return this.http.post<void>(
            `${this.apiUrl}/register`,
            data
        );
    }

    signIn (data : signInRequest) : Observable<authResponse> {
        return this.http.post<authResponse>(
            `${this.apiUrl}/login`,
            data,
            { withCredentials : true }
        )
    }

    getCurrentUser () : Observable<authUser> {
        return this.http.get<authUser>(
            `${this.apiUrl}/me`,
            { withCredentials : true }
        );
    }

    logout () : Observable<void> {
        return this.http.post<void>(
            `${this.apiUrl}/logout`,
            {},
            { withCredentials : true }
        );
    }
}