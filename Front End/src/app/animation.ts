import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group,
  state,
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }),
      ],
      { optional: true }
    ),
    query(":enter", [style({ left: "-100%" })], { optional: true }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))], {
        optional: true,
      }),
    ]),
    query(":enter", animateChild(), { optional: true }),
  ]),
]);

export const dropMenuAnimation = trigger("dropMenu", [
  state(
    "open",
    style({
      //Show
      visibility: "visible",
      bottom: "0px",
      opacity: 1,
    })
  ),
  state(
    "closed",
    style({
      //Hide
      visibility: "hidden",
      bottom: "-30px",
      opacity: 0,
    })
  ),
  transition("open <=> closed", [animate(250)]),

  state(
    "spinIn",
    style({
      transform: "rotate(0deg)",
    })
  ),
  state(
    "spinOut",
    style({
      transform: "rotate(180deg)",
    })
  ),
  transition("spinIn <=> spinOut", [animate(250)]),
]);

export const slideSelectorAnimation = trigger("inOutSelect", [
  transition(":enter", [
    style({ height: 0, opacity: 0 }),
    animate("200ms ease-out", style({ height: '10%', opacity: 1 })),
  ]),
  transition(":leave", [
    style({ height: '10%', opacity: 1 }),
    animate("200ms ease-in", style({ height: 0, opacity: 0 })),
  ]),
]);

export const slideImageAnimation = trigger("inOutImg", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }),
      ],
      { optional: true }
    ),
    query(":enter", [style({ left: "-100%" })], { optional: true }),
    query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))], {
        optional: true,
      }),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))], {
        optional: true,
      }),
    ]),
    query(":enter", animateChild(), { optional: true }),
  ]),
]);
