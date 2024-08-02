import { IItem } from "../Component/listcategory/item";

export interface Category extends IItem {
  // getId(): number;
  getPath(): string;
  // getName(): string;
}
export class Category implements Category {
  private id: number;
  private imgpath: string;
  private name: string;

  constructor(id: number, imgpath: string, name: string) {
    this.id = id;
    this.imgpath = imgpath;
    this.name = name;
  }
  getId() {
    return this.id;
  }
  getPath() {
    return this.imgpath;
  }
  getName() {
    return this.name;
  }
}
