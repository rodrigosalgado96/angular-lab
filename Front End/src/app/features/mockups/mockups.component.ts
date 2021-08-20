import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { dropdownButton } from "src/app/shared/models/dropdown-button.model";
import { slideShow } from "src/app/shared/models/slide-show.model";


@Component({
  selector: "app-mockups",
  templateUrl: "./mockups.component.html",
  styleUrls: ["./mockups.component.scss"]
})
export class MockupsComponent implements OnInit {
  form: FormGroup
  //DropMenu Button
  actionMenu: boolean = false;
  buttonsList: dropdownButton[] = [
    { content: "+" },
    { content: "-" },
    { content: "*" },
    { content: "/" },
    { content: "=" },
  ];

  //Slides Show
  slides: slideShow[] = [
    { link: "https://i.imgur.com/mgYxTbW.gif", alt: "Dwight Faces" },
    {
      link: "https://media.giphy.com/media/lMVNl6XxTvXgs/source.gif",
      alt: "Michael Dancing",
    },
    {
      link: "https://media.giphy.com/media/uMPjuulT3rpRe/source.gif",
      alt: "Andy Dancing",
    },
    {
      link: "https://media.giphy.com/media/ewx4bjThJZkI0/source.gif",
      alt: "Parkour",
    },
    {
      link: "https://media.giphy.com/media/nGzeO4uSxRUcg/source.gif",
      alt: "Erin",
    },
    {
      link: "https://media.giphy.com/media/goEWraNuCucVi/source.gif",
      alt: "Segue o Jogo!",
    },
  ];

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{12}")]],
    })
  }

  cancel(){
    this.form.reset();
  }

  submit(){
    if(this.form.valid){
      const form = this.form.value;
  
      console.log(form);
    }
  }
}
