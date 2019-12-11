import { Component } from "@angular/core";

// template: html -->> inline template html
// styles: [] -->> we can use strings of styles directly without an external css file
@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
  //styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "online/offline";

}
