import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // servers; (code which causes an error not to push data in the array)
  servers = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    // const position = id + 1; (code which causes an error not remove from array)
    const position = id;
    this.servers.splice(position, 1);
  }
}
