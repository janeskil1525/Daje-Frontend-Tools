import { Injectable } from "@angular/core";
import { version, buildDate, commitHash } from "../../../environments/version";

@Injectable({
    providedIn: "root",
})
export class VersionService {
    getVersion(): string {
        return `Build ${version}, ${buildDate}`;
    }
}