import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private sessionService: SessionService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.headers.get('skip')) {
            return next.handle(req);
        }
        const token = this.sessionService.clerkUser ? this.sessionService.clerkUser.token : null;
        const tokenizedReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        return next.handle(tokenizedReq);
    }
}
