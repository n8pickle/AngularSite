import { Component, OnInit } from "@angular/core";

@Component({
  selector: "picture",
  template: `
    <h2>This is me:</h2>
    <img src="{{ myFacebook }}" />
  `,
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent {
  myFacebook =
    "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/s960x960/71315212_2687179018008149_5519181538278768640_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_oc=AQmZXv0QLBUxD2p_qshn44XKu7uwvw5bKeWJaoOYofXL2HxMGE-Cf0afpZuFBc9SXnA&_nc_ht=scontent-den4-1.xx&_nc_tp=7&oh=a242a995f9447d3091357bfe2d2fdf23&oe=5EAB604B";
}
