export class Post {

  private _id: number;
  private _title: string;
  private _numberOfComments: number;
  private _imageOfPost: string;
  private _postComment: Comment[];
  private _postCategory: string;

  constructor(obj?: any) {
    this._id = obj && obj.id;
    this._title = obj && obj.title;
    this._numberOfComments = obj && obj.numberOfComments;
    this._imageOfPost = obj && obj.imageOfPost;
    this._postComment = obj && obj.postComment;
    this._postCategory = obj && obj.postCategory;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get numberOfComments(): number {
    return this._numberOfComments;
  }

  set numberOfComments(value: number) {
    this._numberOfComments = value;
  }

  get imageOfPost(): string {
    return this._imageOfPost;
  }

  set imageOfPost(value: string) {
    this._imageOfPost = value;
  }

  get postComment(): Comment[] {
    return this._postComment;
  }

  set postComment(value: Comment[]) {
    this._postComment = value;
  }

  get postCategory(): string {
    return this._postCategory;
  }

  set postCategory(value: string) {
    this._postCategory = value;
  }
}
