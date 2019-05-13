import { Observable } from 'tns-core-modules/data/observable';
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class ComicViewViewModel extends Observable {
    constructor() {
        super();
    }
    goBack(){
        topmost().goBack()
    }
}
    