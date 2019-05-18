import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { Cache } from "tns-core-modules/ui/image-cache";
import { request } from 'tns-core-modules/http/http';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view"
import { fromFile } from 'tns-core-modules/image-source/image-source';
export class BlogViewModel extends Observable {
    post;
    loading = true;

    constructor() {
        super();

        const cache = new Cache();
        cache.placeholder = fromFile("~/img/land.jpg");
        cache.maxRequests = 5;
        cache.enableDownload()

        request({
            url: "https://beliepedia.org/wp-json/wp/v2/posts",
            method: "get",
        }).then(data => {
            this.post = data.content.toJSON()
            this.loading = false
            // console.log(data.content.toJSON()[0].id)
            this.notifyPropertyChange('post', data.content.toJSON())
        })
    }

    goto(ev: ItemEventData) {
        let selected = <StackLayout>ev.object
        var page = selected.page.frame.parent.parent.page.frame


        page.navigate({
            bindingContext:this.post[ev.index],
            moduleName: "views/blog/blog-view-page",
            transition: {
                name: "slide",
                // duration: 300
            }
        })


        // console.log(this.post[ev.index])
    }
}
