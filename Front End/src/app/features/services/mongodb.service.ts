import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Posts, PostsAdapter } from "src/app/shared/models/posts.model";
import { map } from "rxjs/operators";

const API_MONGO_DB = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class MongoDBService {
  constructor(private http: HttpClient, private postsAdapter: PostsAdapter) {}

  //get
  getServerStatus() {
    return this.http.get(`${API_MONGO_DB}`);
  }
  getAllPosts() {
    return this.http
      .get(`${API_MONGO_DB}/posts`)
      .pipe(
        map((data: any[]) => data.map((item) => this.postsAdapter.adapt(item)))
      );
  }

  //POST
  newPost(post: Posts) {
    return this.http.post(`${API_MONGO_DB}/posts`, post);
  }

  //UPDATE
  updateAPost(id: string, post: any) {
    return this.http.patch(`${API_MONGO_DB}/posts/${id}`, post);
  }

  //Delete
  deleteAPost(id: string) {
    return this.http.delete(`${API_MONGO_DB}/posts/${id}`);
  }
}
