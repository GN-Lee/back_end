import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const { method, url, params } = request;
    const now = Date.now();
    console.log('[Request]', { method, url, params });
    return next
      .handle()
      .pipe(tap(() => console.log(`Duration:${Date.now() - now}`)));
  }
}
