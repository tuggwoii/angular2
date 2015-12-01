import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'loginForm'
})
@View({
        template: '<form><div class="form-group"><label>{{labelUsername}}</label><input type="text" class="form-control" placeholder="{{placeholderUsername}}"/></div><div class="form-group"><label>{{labelPassword}}</label><input type="text" class="form-control" placeholder="{{placeholderPassword}}"/></div></form>'
})
class LoginComponent {
    labelUsername: string;
    labelPassword: string;
    placeholderUsername: string;
    placeholderPassword: string;
    constructor() {
        this.labelUsername = "Username";
        this.labelPassword = "Password";
        this.placeholderUsername = "Input username";
        this.placeholderPassword = "Input password";
    }
}
bootstrap(LoginComponent);