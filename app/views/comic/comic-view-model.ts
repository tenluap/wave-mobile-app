import { Observable } from 'tns-core-modules/data/observable';
import { screen } from 'tns-core-modules/platform/platform';

export class ComicViewModel extends Observable {
    width;

    constructor() {
        super();
this.width = (screen.mainScreen.widthDIPs / 2) -30
    }
}
    