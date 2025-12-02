import { Injectable, inject } from '@angular/core';
import {LocalStorageService} from "../../../core/localstorage/local-storage.service";
import {Observable} from "rxjs";
import type {ObjectTreeListInterface} from "./object.tree.list.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})

export class ObjectTreeListService {
    private http = inject(HttpClient);
    localkey: any;

    constructor(
        private localstorage: LocalStorageService,
    ){
        this.localkey = this.localstorage.getItem('X-Token-Check')!;
    };

    public getObjectTree(tools_projects_pkey: string): Observable <ObjectTreeListInterface> {
        let url = environment.apiUrl + 'tools/api/v1/treelist/' + tools_projects_pkey;
        console.log( url);
        return this.http.get <ObjectTreeListInterface>(url, {
            headers: {
                'X-Token-Check': this.localkey
            }
        });
    }
}
