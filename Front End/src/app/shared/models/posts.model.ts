import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/services/adapter';

export class Posts {
  constructor(
    public id: string,
    public title: string,
    public description: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class PostsAdapter implements Adapter<Posts> {
  adapt(item: any): Posts {
    return new Posts(
      item._id,
      item.title,
      item.description
    );
  }
}
