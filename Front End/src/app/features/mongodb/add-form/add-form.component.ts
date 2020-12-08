import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchMap } from 'rxjs/operators';

import { MongoDBCommunicationService } from '../../services/mongodb.communication.service';
import { MongoDBService } from "../../services/mongodb.service";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.scss"],
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mongoService: MongoDBService,
    private mongoRefresh: MongoDBCommunicationService
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", Validators.required],
    });
  }

  clearButton(event: Event): void {
    event.preventDefault();
    this.addForm.reset();
  }

  upload(event: Event): void {
    event.preventDefault();
    if (this.addForm.valid) {
      const newPost = this.addForm.value;

      this.mongoService.newPost(newPost)
      .pipe(switchMap(() => this.mongoService.getAllPosts()))
      .subscribe(
        (postsList) => {
          this.mongoRefresh.emmitPosts(postsList);
          this.addForm.reset();
        },
        (err) => console.log(err.error)
      );
    }
  }
}
