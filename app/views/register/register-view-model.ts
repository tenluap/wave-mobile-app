import { Observable } from 'tns-core-modules/data/observable';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class RegisterViewModel extends Observable {
    constructor() {
        super();
    }
    login(){
        topmost().navigate({
            moduleName:"views/login/login-page",
            transition:{
                duration:300,
                name:"slideRight"
            }
        })
    }
}
    