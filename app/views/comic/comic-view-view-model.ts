import { Observable, EventData } from 'tns-core-modules/data/observable';
import { topmost, BindingOptions, NavigatedData, Page } from 'tns-core-modules/ui/frame/frame';
import { localStorage } from '~/shared/env';
import * as SocialShare from "nativescript-social-share"
import _ from 'lodash';


export class ComicViewViewModel extends Observable  {
    comic
    pages
    constructor() {
        super();
        
        // var page = <NavigatedData>arg.object
        
    this.comic = JSON.parse(localStorage.getString('comics'))
    this.pages = _.sortBy(JSON.parse(localStorage.getString('comics')).pages,"page")
    // this.pages = _.sortBy(JSON.parse(localStorage.getString('comics')).pages,"page")
    console.log(this.pages)
    // console.log(this.comic)
    }

    shareBtn(ev: EventData) {
        let shr = <Page>ev.object

        SocialShare.shareUrl(this.comic.download, `Download WAVE STORIES episode ${this.comic.episode}`)
        // shr.showModal("/shared/share/share-page","", ()=>{
}
        // })

    

    goBack(){
        topmost().goBack()
    }
}
    