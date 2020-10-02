import { Component, OnDestroy, OnInit } from "@angular/core";
import { DragulaService } from "ng2-dragula";


@Component({
  selector: "dd-view",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.scss"],
})
export class DragAndDropComponent implements OnInit, OnDestroy {
  vampires: any; //[(dragulaModel)]="vampires"

  /*
    https://github.com/valor-software/ng2-dragula/
  */

  arrayOne: any[] = [
    { id: 1, name: "AAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCC" },
    { id: 4, name: "DDD" },
  ];
  arrayTwo: any[] = [
    { id: 5, name: "EEE" },
    { id: 6, name: "FFF" },
    { id: 7, name: "GGG" },
    { id: 8, name: "HHH" },
  ];

  constructor(private dragulaService: DragulaService) {}
  ngOnDestroy(): void {
    this.dragulaService.destroy("drag_test");
  }

  ngOnInit(): void {
    this.dragulaService.createGroup("drag_test", {
      revertOnSpill: true, //True by default, when dropped over, the item returns to his source
      // removeOnSpill: true, //remove item if dropped over
      // copy: (el, source) => {
      //   return source.id === "source";
      // }, //Will copy itens from id informed <needs copyItem>
      // copyItem: (item) => {
      //   return item;
      // }, //Allow item to be coppied in another div
      // accepts: (el, target, source, sibling) => {
      //   return target.id !== "source";
      // }, //allows to drop if its is not in the 'source' div
    });
  }

  showLogs() {
    console.log("Left: " + this.arrayOne.length);
    console.log("Right: " + this.arrayTwo.length);
  }
}
