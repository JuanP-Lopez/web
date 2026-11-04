import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//Interface
import { UserStatistics  } from "../models/user-statistics";

@Injectable({
    providedIn: 'root'
})
export class UserStatisticsService {

    private http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:5021/api/User/Stats'

    getUserStatistics () : Observable<UserStatistics> {
        return this.http.get<UserStatistics>(
            this.apiUrl,
            { withCredentials : true }
        );
    }

}