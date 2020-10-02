import { NullTemplateVisitor } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import {
  dropMenuAnimation,
  slideImageAnimation,
  slideSelectorAnimation,
} from "src/app/animation";

@Component({
  selector: "app-mockups",
  templateUrl: "./mockups.component.html",
  styleUrls: ["./mockups.component.scss"],
  animations: [dropMenuAnimation, slideSelectorAnimation, slideImageAnimation],
})
export class MockupsComponent implements OnInit {
  //DropMenu Button
  actionMenu: boolean = false;
  buttonsList: any[] = [
    { id: 1, content: "+" },
    { id: 2, content: "-" },
    { id: 3, content: "*" },
    { id: 4, content: "/" },
    { id: 5, content: "=" },
  ];
  /* ******************** */

  //Slides
  index: number = 0;
  slides: any[] = [
    { id: 1, link: "https://i.imgur.com/mgYxTbW.gif", alt: "Dwight Faces" },
    {
      id: 2,
      link: "https://media.giphy.com/media/lMVNl6XxTvXgs/source.gif",
      alt: "Michael Dancing",
    },
    {
      id: 3,
      link: "https://media.giphy.com/media/uMPjuulT3rpRe/source.gif",
      alt: "Andy Dancing",
    },
    {
      id: 4,
      link: "https://media.giphy.com/media/ewx4bjThJZkI0/source.gif",
      alt: "Parkour",
    },
    {
      id: 5,
      link: "https://media.giphy.com/media/nGzeO4uSxRUcg/source.gif",
      alt: "Erin",
    },
    {
      id: 6,
      link: "https://media.giphy.com/media/goEWraNuCucVi/source.gif",
      alt: "Segue o Jogo!",
    },
  ];
  activeId: number = this.slides[this.index].id;
  /* ******************** */

  //Angular Class - Acessibility
  public yesNoAnswer: string = "no";
  public form: FormGroup = null;
  public test: string = null;
  /* ******************** */

  constructor(public formBuilder: FormBuilder) {
    //Angular Class - Acessibility
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.index++;
      if (this.index > this.slides.length - 1) this.index = 0;
      this.activeId = this.slides[this.index].id;
    }, 5000);
  }

  // DropMenu Button
  toggleActionMenu() {
    this.actionMenu = !this.actionMenu;
  }

  //Slides Controller
  chooseSlide(id: number): void {
    this.activeId = id;
    this.index = id - 1;
  }
}
