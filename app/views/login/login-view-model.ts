import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { api, localStorage } from '~/shared/env';
import { request } from 'tns-core-modules/http'
import * as store from 'tns-core-modules/application-settings'
import { screen } from 'tns-core-modules/platform/platform';

export class LoginViewModel extends Observable {
  username: string
  password: string
  message: string
  loading = false
  screen = screen.mainScreen.widthDIPs
  constructor() {
    super();
  }

  register() {
    topmost().navigate({
      transition: {
        name: "slide",
        duration: 300
      },
      moduleName: "views/register/register-page"
    })
  }

  async login() {

    if (this.username == undefined || this.password == undefined) {
      this.message = "Empty Value Sent"
      this.notifyPropertyChange('message', "Empty Value Sent")
    } else {
      this.loading = true
      this.notifyPropertyChange('loading', "true")


      var auth = {
        content: JSON.stringify({
          username: this.username.toLowerCase(),
          password: this.password
        }), headers: {
          "Content-Type": "application/json"
        }
      }

      var data = Object.assign(api.login, auth)

      request(data).then(async res => {
        console.log(res.content)
        if (res.content.toJSON().error) {
          setTimeout(() => {
            this.loading = false

            this.message = "LOGIN FAILED"
            this.notifyPropertyChange('message', "LOGIN FAILED")
          }, 2000)
        } else {

          // setTimeout( async ()=>{

          var r = res.content.toJSON()
          localStorage.setString("token", r.id)
          localStorage.setString("userId", r.userId)

          var profile = await request({
            url: api.profile.url + `?filter={"where":{"userId":"${r.userId}"}}`,
            method: 'get'
          })

          localStorage.setString('profile', JSON.stringify(profile.content.toJSON()[0]))

          topmost().navigate({
            transition: {
              name: "flip",
              duration: 500
            },
            moduleName: "views/tabview/tabview-page"
          })
          // }, 3000)

        }

      })

    }


  }


}
