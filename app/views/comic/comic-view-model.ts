import { Observable, EventData } from 'tns-core-modules/data/observable';
import { screen } from 'tns-core-modules/platform/platform';
import { Page } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api, localStorage } from '~/shared/env';
import { ListView, ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

export class ComicViewModel extends Observable {
    width;
    comics
    constructor() {
        super();
        this.width = (screen.mainScreen.widthDIPs / 2) - 30

        request({
            url:api.comics.url,
            method:api.comics.method
        }).then(data=>{
            // console.log(data.content.toJSON()[0].pages)
            this.comics = data.content.toJSON()
            this.notifyPropertyChange('comics',data.content.toJSON())
        })
    }

    goto(ev: ItemEventData) {
        let selected = <Page>ev.object
        var page = selected.page.frame.parent.parent.page.frame
        let list =<ListView>ev.object

    //    console.log(ev.index)
        localStorage.setString('comics',JSON.stringify(this.comics[ev.index]))
        page.navigate({
            bindingContext:this.comics[ev.index].pages,
            moduleName: "views/comic/comic-view-page",
            transition: {
                name: "slide",
                // duration: 300
            }
        })


        // console.log(selected)
    }

    upload() {
     
    }
}
