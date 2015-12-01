import {Component, View, bootstrap} from 'angular2/angular2';
import { LoginModel } from './model';
@Component({
    selector: 'loginForm'
})
@View({
        templateUrl: 'src/views/partials/login.html'
})
class LoginComponent {
    labelUsername: string;
    labelPassword: string;
    placeholderUsername: string;
    placeholderPassword: string;
    buttonText: string;
    model: Object;
    constructor() {
        this.labelUsername = "Username";
        this.labelPassword = "Password";
        this.placeholderUsername = "Input username";
        this.placeholderPassword = "Input password";
        this.buttonText = "Login"
        this.model = new LoginModel('','');
    }
    login() {
        console.log(this.model);
    }
}
bootstrap(LoginComponent);