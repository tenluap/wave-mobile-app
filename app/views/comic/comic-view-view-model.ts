import { Observable } from 'tns-core-modules/data/observable';
import { topmost, BindingOptions, NavigatedData } from 'tns-core-modules/ui/frame/frame';
import { localStorage } from '~/shared/env';
import _ from 'underscore';

export class ComicViewViewModel extends Observable  {
    comic
    pages
    constructor() {
        super();
        
        
        // var page = <NavigatedData>arg.object
        
    this.comic = JSON.parse(localStorage.getString('comics'))
    this.pages = _.sortBy(JSON.parse(localStorage.getString('comics')).pages,"page")
    console.log(this.pages)
    // console.log(this.comic)
    }

   

    goBack(){
        topmost().goBack()
    }
}
    