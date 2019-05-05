import { EventData } from 'tns-core-modules/data/observable';
import { TabviewViewModel } from './tabview-view-model';
import { Page } from 'tns-core-modules/ui/page/page';

export function pageLoaded(args: EventData) {
     let page = <Page>args.object;
    page.bindingContext = new TabviewViewModel(page);
}

