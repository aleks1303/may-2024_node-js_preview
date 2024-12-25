export class ErrorApi extends Error {
  status: number;
  constructor(massege: string, status: number) {
    super(massege);
    this.status = status;
  }
}
