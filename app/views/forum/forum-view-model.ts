import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api } from '~/shared/env';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

export class ForumViewModel extends Observable {
    topics;
    loading
    constructor() {
        super();
        this.loading = true

        request({
            url: api.getForum.url,
            method: api.getForum.method
        }).then(list => {
            this.loading = false
            this.topics = list.content.toJSON()
            this.notifyPropertyChange("topics", list.content.toJSON())
            // console.log(list.content.toJSON())
        })
    }


    test(){
        console.log('testing')
    }
    

    goto(ev: ItemEventData) {
        var selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
        // var page = selected.page.frame
        // console.log()
        page.navigate({
            bindingContext: this.topics[ev.index],
            moduleName: "views/forum/forum-view-page",
            transition: { name: "slideLeft" }
        })
    }

    create(ev: EventData) {
        var selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
        // var page = selected.page.frame
        // console.log()
        page.navigate({
            moduleName: "views/forum/forum-add-page",
            transition: { name: "slideLeft" }
        })
    }

}
