import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page, View } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import * as SocialShare from "nativescript-social-share"
import { Button } from 'tns-core-modules/ui/button/button';
export class BlogViewViewModel extends Observable {
    content
    tog: boolean = true
    constructor(post) {
        super();
        this.content = post
        console.log(post)
    }

    shareBtn(ev: EventData) {
        let shr = <Page>ev.object
        //@ts-ignore
        SocialShare.shareUrl(this.content.link, content.title)

    }

    toggle(ev: EventData) {
        var selected = <Button>ev.object

        if (selected.text == 'Bible') {
            this.tog = true
            this.notifyPropertyChange("tog", true)
        } else {
            this.tog = false
            this.notifyPropertyChange("tog", false)
        }
    }

    goBack(ev: EventData) {
        var btn = <Page>ev.object
        topmost().goBack()
    }
}
