import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor( private service: ApiService) {

    }


    ngOnInit() {
    }

    syncData() {
        let body = {name: "hola5000"};
        this.service.postPF(JSON.stringify(body)).subscribe(data => {
            if(data !== 'Created')
            {
                alert("ERROR");
            }
        });
    }
}