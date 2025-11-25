import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
    private xtokencheck: string = "";

    setXTokenCheck(token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW5pZXNfcGtleSI6MiwiaXNfYWRtaW4iOjAsIm5hbWUiOiJLbmVwIMOlIEtuw6VwIiwicGFzc3dvcmQiOiIwZ1lXNmpNdTd0XC9xZU5EdVFLaE43bE5KYm1pNEdOTGlUT3hkVlZScW1rMjROWUFqaUJUSWdFOGI0cFNYV1c2ZXZHT1BGUVdVMEttcnRydmpoWThkdUEiLCJzdXBwb3J0IjowLCJ1c2VyaWQiOiJqYW5AZGFqZS53b3JrIiwidXNlcm5hbWUiOiJKYW4gRXNraWxzc29uIiwidXNlcnNfcGtleSI6M30.sjcjX_9HVzDnIioX8iWBOZ7jMR26O4GXzxtzldlUWDw') {
        this.xtokencheck = token;
    }

    getXTokenCheck(): string {
        // 'X-Token-Check'
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW5pZXNfcGtleSI6MiwiaXNfYWRtaW4iOjAsIm5hbWUiOiJLbmVwIMOlIEtuw6VwIiwicGFzc3dvcmQiOiIwZ1lXNmpNdTd0XC9xZU5EdVFLaE43bE5KYm1pNEdOTGlUT3hkVlZScW1rMjROWUFqaUJUSWdFOGI0cFNYV1c2ZXZHT1BGUVdVMEttcnRydmpoWThkdUEiLCJzdXBwb3J0IjowLCJ1c2VyaWQiOiJqYW5AZGFqZS53b3JrIiwidXNlcm5hbWUiOiJKYW4gRXNraWxzc29uIiwidXNlcnNfcGtleSI6M30.sjcjX_9HVzDnIioX8iWBOZ7jMR26O4GXzxtzldlUWDw';
    }
}
