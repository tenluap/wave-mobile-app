/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as application from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { localStorage, api } from "./shared/env";
import { request, getJSON } from "tns-core-modules/http/http";

var token = localStorage.getString('token')
console.log("token key: " + token)
if (token == undefined) {
    application.start({ moduleName: "views/login/login-page" });
} else {
    application.start({ moduleName: "views/tabview/tabview-page" });
}


// Validate Token before logging in
// request({ // Check if token exist
//     url: `${api.client.url}/me/exists`,
//     method: 'GET',
//     headers: {
//         Authorization: token
//     }
// }).then(async exists => {
//     console.log(exists)
//     if (exists.content.toJSON().exists) {
//         // Get count for the users tokens given
//         var accessTokenCount = await request({
//             url: `${api.client.url}/me/accessTokens/count`,
//             method: "GET",
//             headers: {
//                 Authorization: token
//             }
//         }
//         )

//         if (accessTokenCount.content.toJSON().count > 1) {// if the user has more than one token on thier account delete all.
//             request({
//                 url: `${api.client.url}/me/accessTokens`,
//                 method: 'DELETE'
//             })
//             application.start({ moduleName: "views/login/login-page" });
//         } else {
//             application.start({ moduleName: "views/tabview/tabview-page" });
//         }
//     }
// }).catch(err => {
//     console.log(err)
// })







// application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
