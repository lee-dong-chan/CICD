export interface INotice {
  getStoreId(): number;
  getNotice(): string;
}

export class StoreNotice implements INotice {
  storeid: number;
  notice: string;
  constructor(storeid: number, notice: string) {
    this.storeid = storeid;
    this.notice = notice;
  }
  getStoreId() {
    return this.storeid;
  }
  getNotice() {
    return this.notice;
  }
}
