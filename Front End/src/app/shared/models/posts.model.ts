import { Injectable } from '@angular/core';
import { Adapter } from 'src/app/core/services/adapter';

export class Posts {
  constructor(
    private title: string,
    private description: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class PostsAdapter implements Adapter<Posts> {
  adapt(item: any): Posts {
    return new Posts(
      item.title,
      item.description
    );
  }
}
