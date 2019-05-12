import { Observable, EventData } from 'tns-core-modules/data/observable';
import { screen } from 'tns-core-modules/platform/platform';
import { Page } from 'tns-core-modules/ui/frame/frame';

export class ComicViewModel extends Observable {
    width;

    constructor() {
        super();
this.width = (screen.mainScreen.widthDIPs / 2) -30
    }
  
    goto(ev: EventData) {
        let selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
      

        page.navigate({
            moduleName: "views/comic/comic-view-page",
            transition: {
                name: "slide",
                // duration: 300
            }
        })
       

        // console.log(selected)
    }
}
    