export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}
