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
  items: Observable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/chats')  

    this.items.subscribe(x => console.log(x));

    console.log(this.items);
    
  }
  title = 'app works!';
}
