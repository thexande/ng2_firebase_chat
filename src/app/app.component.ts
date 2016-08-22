import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  title = 'Angular Fire 2 Chat';

  constructor(af: AngularFire) {
    this.items = af.database.list('/chats')      
  }

  save(text: string){
    this.items.push({ text })
  }
}

