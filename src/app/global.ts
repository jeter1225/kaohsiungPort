import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenService } from './service-summary/authen.service';

@Injectable({
    providedIn: 'root'
})
export class Global {
    token: any;
    tokenUrl: string = "https://fleet-geode-218517.appspot.com/api/token/";
    userUrl: string = "https://fleet-geode-218517.appspot.com/api/user/";
    infoUrl: string = "http://fleet-geode-218517.appspot.com/api/event/";
    statusUrl: string = "http://fleet-geode-218517.appspot.com/api/status/";

    setToken(tok: any) {
        this.token = tok;
        localStorage.setItem('token', this.token);
    }

    getToken() {
        if(!this.token)
        {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    }
}
