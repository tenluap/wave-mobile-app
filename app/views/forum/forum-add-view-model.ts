import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { confirm } from 'tns-core-modules/ui/dialogs/dialogs';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import { request } from 'tns-core-modules/http/http';
import { api, localStorage } from '~/shared/env';
import moment from "moment"
export class ForumAddViewModel extends Observable {
    title;
    content
    constructor() {
        super();
    }

    async submit(ev:EventData){
    
        var submit = <Page>ev.object
    
        confirm("Are you sure this is what you want to create").then(async val=>{
            if(val){
                // push to the db
                await request({
                    url:api.forum.url,
                    method:api.forum.method,
                    headers:{
                     'Content-Type': 'application/json'
                    },
                    content:JSON.stringify({
                        topic:this.title,
                        content:this.content,
                        date:moment().format('Do MMMM YYYY'),
                        owner:JSON.parse(localStorage.getString('profile')).id,
                        views:0
                    })
                })
                
                topmost().goBack()
            }
        })
    }

   goBack(){
       topmost().goBack()
   }
}
    