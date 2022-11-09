import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Aadhars } from './aadhars';



@Injectable({
    providedIn: 'root'
})
export class AadharsService {
     apiServerUrl = 'http://localhost:8080/aadhars';


    constructor(private http: HttpClient){ }

    public getinactive(): Observable<Aadhars[]>{
        return this.http.get<Aadhars[]>(`${this.apiServerUrl}/all`);
    }

    public getAllAadhars(userid: number): Observable<Aadhars[]>{
        return this.http.get<Aadhars[]>(`${this.apiServerUrl}/huser/${userid}`);
    }

    public addAadhars(aadhars: Aadhars): Observable<Aadhars>{
        return this.http.post<Aadhars>(`${this.apiServerUrl}/add`, aadhars);
    }

    public updateAadhars(aadhars: Aadhars): Observable<Aadhars>{
        return this.http.put<Aadhars>(`${this.apiServerUrl}/update`, aadhars);
    }

    public deleteAadhars(aadharid: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/delete/${aadharid}`);
    }

    
}