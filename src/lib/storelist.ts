export interface IStore {
  getId(): number;
  getImg(): string;
  getName(): string;
  getStar(): number;
  getReview(): number;
  getComment(): number;
  getYogi(): boolean;
  getLeast(): number;
  getTime(): number;
  getCate(): number;
  getSale(): number;
  getPayment(): string[];
  getLeastPrice(): number;
}

export class StoreList implements IStore {
  private id: number;
  private img: string;
  private name: string;
  private star: number;
  private review: number;
  private comment: number;
  private yogi: boolean;
  private least: number;
  private time: number;
  private cate: number;
  private sale: number;
  private payment: string[];
  private leastPrice: number;
  constructor(
    id: number,
    img: string,
    name: string,
    star: number,
    review: number,
    comment: number,
    yogi: boolean,
    least: number,
    time: number,
    cate: number,
    sale: number,
    payment: string[],
    leastPrice: number
  ) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.star = star;
    this.review = review;
    this.comment = comment;
    this.yogi = yogi;
    this.least = least;
    this.time = time;
    this.cate = cate;
    this.sale = sale;
    this.payment = payment;
    this.leastPrice = leastPrice;
  }
  getId() {
    return this.id;
  }
  getImg() {
    return this.img;
  }
  getName() {
    return this.name;
  }
  getStar() {
    return this.star;
  }
  getReview() {
    return this.review;
  }
  getComment() {
    return this.comment;
  }
  getYogi() {
    return this.yogi;
  }
  getLeast() {
    return this.least;
  }
  getTime() {
    return this.time;
  }
  getCate() {
    return this.cate;
  }
  getSale() {
    return this.sale;
  }
  getPayment() {
    return this.payment;
  }
  getLeastPrice() {
    return this.leastPrice;
  }
}
