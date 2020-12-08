import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MongoDBCommunicationService {
  private postsSource = new Subject<any>();

  postsSource$ = this.postsSource.asObservable();

  emmitPosts(posts: any) {
    this.postsSource.next(posts);
  }
}
