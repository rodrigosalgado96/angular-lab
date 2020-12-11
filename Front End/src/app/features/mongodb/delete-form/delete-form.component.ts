import { Component, Input, OnInit } from "@angular/core";
import { switchMap } from "rxjs/operators";

import { Posts } from "src/app/shared/models/posts.model";
import { MongoDBCommunicationService } from "../../services/mongodb.communication.service";
import { MongoDBService } from "../../services/mongodb.service";

@Component({
  selector: "app-delete-form",
  templateUrl: "./delete-form.component.html",
  styleUrls: ["./delete-form.component.scss"],
})
export class DeleteFormComponent implements OnInit {
  @Input() posts: Posts[];

  deleteId: string = "";

  constructor(
    private mongoService: MongoDBService,
    private mongoRefresh: MongoDBCommunicationService
  ) {}

  ngOnInit(): void {}

  selectId(id: string) {
    this.deleteId = id;
  }

  delete() {
    if (this.deleteId.length) {
      this.mongoService
        .deleteAPost(this.deleteId)
        .pipe(switchMap(() => this.mongoService.getAllPosts()))
        .subscribe((postsList) => {
          this.mongoRefresh.emmitPosts(postsList);
          this.deleteId = "";
        });
    } else {
      alert("Selecione um Post para ser deletado.");
    }
  }
}
