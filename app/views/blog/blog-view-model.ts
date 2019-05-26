import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { request } from 'tns-core-modules/http/http';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view"
export class BlogViewModel extends Observable {
    blogContent;
    // loading = true;
    
    constructor() {
        super();

        console.log(this.get('loading'))
      
    }

    fetchBlog(){
        request({
            url: "https://beliepedia.org/wp-json/wp/v2/posts",
            method: "get",
        }).then(data => {
            // this.blogContent = data.content.toJSON()
            // this.loading = false
            // console.log(data.content.toJSON()[0].id)
            // this.notifyPropertyChange('post', data.content.toJSON())
            this.set('loading',false)
            this.set("blogContent",data.content.toJSON() )
            console.log(this.get('loading'))
        })
    }

    goto(ev: ItemEventData) {
        let selected = <StackLayout>ev.object
        var page = selected.page.frame.parent.parent.page.frame


        page.navigate({
            bindingContext:this.blogContent[ev.index],
            moduleName: "views/blog/blog-view-page",
            transition: {
                name: "slide",
                // duration: 300
            }
        })


        // console.log(this.post[ev.index])
    }
}
