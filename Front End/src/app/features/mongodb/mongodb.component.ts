import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Posts } from "src/app/shared/models/posts.model";
import { MongoDBCommunicationService } from "../services/mongodb.communication.service";
import { MongoDBService } from "../services/mongodb.service";

@Component({
  selector: "app-mongodb",
  templateUrl: "./mongodb.component.html",
  styleUrls: ["./mongodb.component.scss"],
})
export class MongodbComponent implements OnInit, OnDestroy {
  serverStatus: boolean;
  emptyPostsMessage: boolean;

  postsRefresh: Subscription;

  postsList: Posts[];

  constructor(
    private mongoService: MongoDBService,
    private mongoRefresh: MongoDBCommunicationService
  ) {}

  ngOnInit(): void {
    this.postsRefresh = this.mongoRefresh.postsSource$.subscribe(
      (postsList) => (this.postsList = postsList)
    );
    this.checkServerStatus();
  }
  ngOnDestroy(): void {
    this.postsRefresh.unsubscribe();
  }

  checkServerStatus() {
    this.mongoService.getServerStatus().subscribe(
      () => {
        this.serverStatus = true;
        this.getAllPosts();
      },
      (err) => {
        console.log(err);
        this.serverStatus = false;
      }
    );
  }

  getAllPosts() {
    this.serverStatus
      ? this.mongoService.getAllPosts().subscribe(
          (itens) => {
            this.postsList = itens;
            this.emptyPostsMessage = false;
          },
          (err) => {
            console.log(err);
            this.emptyPostsMessage = true;
          }
        )
      : (this.emptyPostsMessage = true);
  }
}
