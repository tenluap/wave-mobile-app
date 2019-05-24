import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api, localStorage } from '~/shared/env';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import moment from 'moment';

export class ForumViewModel extends Observable {
    topics;
    loading;
    profile;

    constructor() {
        super();
        this.loading = true
        this.profile = JSON.parse(localStorage.getString('profile'))

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

     dateTo(val){
        var d =  moment(val).format("DD-MM-Y")
        return d
        
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
