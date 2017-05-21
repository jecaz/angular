export class Comment {

  private _id: number;
  private _author: string;
  private _comment: string;
  private _numberOfPoints: number;

  constructor(obj?: any) {
    this._author = obj && obj.author;
    this._comment = obj && obj.comment;
    this._numberOfPoints = obj && obj.numberOfPoints;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get numberOfPoints(): number {
    return this._numberOfPoints;
  }

  set numberOfPoints(value: number) {
    this._numberOfPoints = value;
  }
}
