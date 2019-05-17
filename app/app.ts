/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { init } from "nativescript-facebook";
import { localStorage } from "./shared/env";
 
application.on(application.launchEvent, function (args) {
    init("{923601681072774}");
});
 
if(localStorage.getString('userId')){
    application.start({ moduleName: "views/tabview/tabview-page" });

}else{

    application.start({ moduleName: "views/login/login-page" });
}


// application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
