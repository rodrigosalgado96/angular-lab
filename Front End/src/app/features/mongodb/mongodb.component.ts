import { Component, OnInit } from "@angular/core";
import { Posts } from "src/app/shared/models/posts.model";
import { MongoDBService } from "../services/mongodb.service";

@Component({
  selector: "app-mongodb",
  templateUrl: "./mongodb.component.html",
  styleUrls: ["./mongodb.component.scss"],
})
export class MongodbComponent implements OnInit {
  serverStatus: boolean;
  postsList: Posts[];

  constructor(private mongoService: MongoDBService) {}

  ngOnInit(): void {
    this.checkServerStatus();

    this.mongoService.getAllPosts().subscribe(
      (itens) => (this.postsList = itens),
      (err) => console.log(err)
    );
  }

  checkServerStatus() {
    this.mongoService.getServerStatus().subscribe(
      () => (this.serverStatus = true),
      () => (this.serverStatus = false)
    );
  }
}
