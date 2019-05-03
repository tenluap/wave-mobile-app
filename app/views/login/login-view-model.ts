import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class LoginViewModel extends Observable {
    constructor() {
        super();
    }

    register(){
       topmost().navigate({
          transition:{
              name:"slideLeft",
              duration:300
          },
          moduleName:"views/register/register-page"
       })
    }

    view(){
        topmost().navigate({
            transition:{
                // name:"slideLeft",
                duration:300
            },
            moduleName:"views/tabview/tabview-page"
         })
    }
}
    