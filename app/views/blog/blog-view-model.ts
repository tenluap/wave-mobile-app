import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class BlogViewModel extends Observable {
    constructor() {
        super();
    }

    goto(ev: EventData) {
        let selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
      

        page.navigate({
            moduleName: "views/blog/blog-view-page",
            transition: {
                name: "slideLeft",
                duration: 300
            }
        })
       

        // console.log(selected)
    }
}
