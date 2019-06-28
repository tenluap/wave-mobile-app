import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { request } from 'tns-core-modules/http/http';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view"
import { localStorage } from '~/shared/env';
export class BlogViewModel extends Observable {
    post: [] = []
    loading = true;

    constructor() {
        super();
        console.log('is post created = ' + localStorage.hasKey('post'))
        if (localStorage.hasKey('post')) {
            this.post = JSON.parse(localStorage.getString('post'))
            this.notifyPropertyChange('post', JSON.parse(localStorage.getString('post')))
        }

        this.fetchBlog()

    }

    async fetchBlog() {
        var data = await request({
            url: "https://beliepedia.org/wp-json/wp/v2/posts",
            method: "get",
        })

        if (this.post.length !== data.content.toJSON().length) {
            this.post = data.content.toJSON()
            this.loading = false
            this.notifyPropertyChange('post', data.content.toJSON())
        } else {
            this.loading = false
            this.notifyPropertyChange('post', data.content.toJSON())
        }

    }

    goto(ev: ItemEventData) {
        let selected = <StackLayout>ev.object
        var page = selected.page.frame.parent.parent.page.frame


        page.navigate({
            bindingContext: this.post[ev.index],
            moduleName: "views/blog/blog-view-page",
            transition: {
                name: "slide"
            }
        })
    }
}
