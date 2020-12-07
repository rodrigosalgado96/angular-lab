import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostsAdapter } from "src/app/shared/models/posts.model";
import { map } from "rxjs/operators";

const API_MONGO_DB = "http://localhost:3000";

@Injectable({
  providedIn: "root",
})
export class MongoDBService {
  constructor(private http: HttpClient, private postsAdapter: PostsAdapter) {}

  //get
  getServerStatus(){
    return this.http.get(`${API_MONGO_DB}`);
  }
  getAllPosts() {
    return this.http
      .get(`${API_MONGO_DB}/posts`)
      .pipe(
        map((data: any[]) => data.map((item) => this.postsAdapter.adapt(item)))
      );
  }
}
