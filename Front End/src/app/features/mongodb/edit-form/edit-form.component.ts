import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchMap } from "rxjs/operators";

import { Posts } from "src/app/shared/models/posts.model";
import { MongoDBCommunicationService } from "../../services/mongodb.communication.service";
import { MongoDBService } from "../../services/mongodb.service";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"],
})
export class EditFormComponent implements OnInit {
  @Input() posts: Posts[];

  editForm: FormGroup;
  editId: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private mongoService: MongoDBService,
    private mongoRefresh: MongoDBCommunicationService
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      title: ["", Validators.required],
    });
  }

  selectId(id: string) {
    this.editId = id;
  }

  upload() {
    if (this.editForm.valid && this.editId.length !== 0) {
      this.mongoService
        .updateAPost(this.editId, this.editForm.value)
        .pipe(switchMap(() => this.mongoService.getAllPosts()))
        .subscribe(
          (postsList) => {
            this.mongoRefresh.emmitPosts(postsList);
            this.editForm.reset();
            this.editId = "";
          },
          (err) => console.log(err)
        );
    } else if (this.editForm.valid) {
      alert("Selecione um Post para ser deletado.");
    }
  }
}
