import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { confirm } from 'tns-core-modules/ui/dialogs/dialogs';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class ForumAddViewModel extends Observable {
    constructor() {
        super();
    }

    submit(ev:EventData){
        var submit = <Page>ev.object
    
        confirm("Are you sure this is what you want to create").then(val=>{
            if(val){
                // push to the db
                topmost().goBack()
            }
        })
    }
}
    