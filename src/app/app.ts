import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
  selector: 'content'
})
@View({
  template: '<h1>{{title}}</p>'
})
class ContentComponent {
  title: string;
  constructor() {
    this.title = "Angular 2";
  }
}
bootstrap(ContentComponent);