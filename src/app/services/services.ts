import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";

declare var $: any; //declare for jQuery usage

@Injectable()
export class Services {

    constructor() { }

    getProfiles(page: number) {
        return Observable.create(obs => {
            let url = `${environment.serverUrl}page=${page}`;
            $.get(url, (data) => {
                obs.next(data)
                obs.complete();
            }, (err) => {
                obs.error(err);
            }, 'json');
        });
    }
}