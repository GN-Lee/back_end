import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
// value = @body
export class EmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.email = '현서핑' + value.email;
    return value;
  }
}
