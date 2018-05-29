import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getPF() {
        return this.http.get("http://localhost:8181/tournament");
    }

    postPF(body: string) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post("http://localhost:8181/tournament", body, {headers: headers, responseType: 'text'});
    }

}