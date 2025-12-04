import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class NewProjectService {
    private subject = new Subject<any>();

    getClickEvent(): Observable<any>{
        return this.subject.asObservable();
    }

    sendClickEvent() {
        this.subject.next(1);
    }
}
