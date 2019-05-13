import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class ForumViewModel extends Observable {
    constructor() {
        super();
    }
    goto(ev: EventData) {
        var selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
        // var page = selected.page.frame
        // console.log()
        page.navigate({
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
