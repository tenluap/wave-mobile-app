import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page, Color, NavigatedData } from 'tns-core-modules/ui/page/page';
import { TextView } from 'tns-core-modules/ui/text-view/text-view'
import { device, screen } from 'tns-core-modules/platform/platform';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Button } from 'tns-core-modules/ui/button/button';
import { action, prompt, confirm } from 'tns-core-modules/ui/dialogs'
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api, localStorage, refreshProfile } from '~/shared/env';
import{Repeater} from 'tns-core-modules/ui/repeater'
import moment from 'moment';
import { ProfileViewModel } from '../profile/profile-view-model';

export class ForumViewViewModel extends Observable {
    profile
    content
    reply: string; // reply box field

    constructor(post) {
        super();

        this.content = post
        this.profile = JSON.parse(localStorage.getString('profile'))
        this.addViews()
       

    }

    async addViews(){
        await request({
            url: api.viewCount.url,
            method: api.viewCount.method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getString("token")
            },
           content:JSON.stringify({ id: this.content.id })
        })
        // this.notifyPropertyChange("content",)
        
    }

    replyMessage(ev: EventData) {
        var field = <Page>ev.object
        var newField = new TextView()
        var stack = new StackLayout()
        var btn = new Button()

        newField.minWidth = screen.mainScreen.widthPixels
        newField.minHeight = screen.mainScreen.heightPixels / 10
        newField.color = new Color("black")
        newField.text = this.reply
        var repeat = <Repeater>field.page.getViewById('repeater')

        // newField.notifyPropertyChange()


        btn.text = "Reply"
        btn.on("tap", (a) => {
            this.reply = newField.text
            // newField.text = this.reply
            newField.closeModal()
            confirm("Confirm reply").then(async val => {
                if (!val) {
                    this.notifyPropertyChange("reply", newField.text)

                } else {
                    var data = {
                        username: this.profile.username,
                        content: newField.text,
                        date: moment.now(),
                        profilesId: this.profile.id,
                        forumsId: this.content.id
                    }

                   await request({
                        url: api.reply.url,
                        method: api.reply.method,
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: localStorage.getString("token")
                        },
                        content: JSON.stringify(data)

                    })
refreshProfile()
                        var arr =this.content.replies.push(data)
                    
                        this.reply = ""
                        // this.content
                        repeat.refresh()
                        this.notifyPropertyChange("reply", "")
                        // this.notifyPropertyChange("content", this.content)
                   

                }

            })

        })

        stack.addChild(newField)
        stack.addChild(btn)



        field.showModal(stack, '', () => { })
    }

    goBack(ev: EventData) {
        var page = <Page>ev.object

        topmost().goBack()
    }
}
