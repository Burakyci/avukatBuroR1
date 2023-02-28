export class OperationResult {
  success;
  message;
  data;
  constructor(params = { success: true, message: undefined, data: undefined }) {
    Object.assign(this, { ...params });
  }
}