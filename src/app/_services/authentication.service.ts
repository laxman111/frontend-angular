import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    private subject = new Subject<any>();

    constructor(private http: HttpClient) { }

    getLoginUserInfo(): Observable<any> {
        return this.subject.asObservable();
    }


    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.subject.next({ user: user });
                }

                return user;
            }));
    }

    refreshAuthToken(authToken: string) {
        let currentUser = JSON.parse(authToken);
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: currentUser.username, password: 'password' })
            .subscribe(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.subject.next({ user: user });
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.subject.next();
    }
}