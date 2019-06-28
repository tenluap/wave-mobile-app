import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api, localStorage } from '~/shared/env';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import moment from 'moment';

export class ForumViewModel extends Observable {
    topics: [] = []
    loading: boolean = true
    profile;

    constructor() {
        super();

        if (localStorage.hasKey('topics')) {
            this.topics = JSON.parse(localStorage.getString('topics'))
            this.notifyPropertyChange('topics', JSON.parse(localStorage.getString('topics')))
        }
        this.profile = JSON.parse(localStorage.getString('profile'))
        this.getForum()

    }

    dateTo(val) {
        var d = moment(val).format("DD-MM-Y")
        return d

    }

    async getForum() {
        var list = await request({
            url: api.getForum.url,
            method: api.getForum.method,
            headers: {
                Authorization: localStorage.getString('token')
            }
        })

        this.loading = false
        this.topics = list.content.toJSON()
        localStorage.setString("topics", JSON.stringify(list.content.toJSON()))
        this.notifyPropertyChange("topics", list.content.toJSON())

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
