import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { login as fbLogin } from "nativescript-facebook";
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';

export class LoginViewModel extends Observable {
    constructor() {
        super();
    }

    register(){
       topmost().navigate({
          transition:{
              name:"slide",
              duration:300
          },
          moduleName:"views/register/register-page"
       })
    }

    view(){
        topmost().navigate({
            transition:{
                name:"flip",
                duration:500
            },
            moduleName:"views/tabview/tabview-page"
         })
    }

    loginFB() {
        fbLogin((err, fbData) => {
          if (err) {
            alert("Error during login: " + err.message);
          } else {
              
              alert(fbData.token)
            console.log(fbData.token);
          }
        });
      }
    
}
    