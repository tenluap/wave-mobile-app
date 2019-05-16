import { Observable } from 'tns-core-modules/data/observable';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { screen } from 'tns-core-modules/platform/platform';
import { api } from '~/shared/env';
import { request } from 'tns-core-modules/http/http';
import { confirm } from 'tns-core-modules/ui/dialogs/dialogs';

export class RegisterViewModel extends Observable {
    loading = false
    username: string
    password: string
    message: string
    lastName: string
    firstName: string
    cpassword: string
    email: string
    phone: number
    screen = screen.mainScreen.widthDIPs

    constructor() {
        super();
    }

    signup() {
       
        if (this.username == undefined || this.password == undefined || this.email == undefined || this.phone == undefined) {
            alert("Empty Field Sent. Please fill all fields")

        } else if (this.password == this.cpassword) {
            this.loading = true
            this.notifyPropertyChange('loading', "true")


            var auth = {
                content: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    phone: this.phone,
                    lastName: this.lastName,
                    firstName: this.firstName
                }), headers: {
                    "Content-Type": "application/json"
                }
            }

            var data = Object.assign(api.register, auth)
            request(data).then(res => {
                if (res.content.toJSON().error) {
                    setTimeout(() => {
                        this.loading = false

                        this.message = "LOGIN FAILED"
                        this.notifyPropertyChange('message', "LOGIN FAILED")
                    }, 2000)
                } else {

                    confirm('Account Created')
                    topmost().navigate({
                        moduleName: "views/login/login-page",
                        transition: {
                            duration: 300,
                            name: "slideRight"
                        }
                    })

                }

            })
           
        } else {
            alert("Confirm password")
        }





    }

    goback() {
        topmost().navigate({
            moduleName: "views/login/login-page",
            transition: {
                duration: 300,
                name: "slideRight"
            }
        })
    }
}
