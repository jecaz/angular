export class Post {

  private _id: number;
  private _name: string;
  private _numberOfComments: number;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._name = obj && obj.name;
    this._numberOfComments = obj && obj.numberOfComments;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get numberOfComments(): number {
    return this._numberOfComments;
  }

  set numberOfComments(value: number) {
    this._numberOfComments = value;
  }
}
