import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { ForumViewViewModel } from './forum-view-view-model';
import { Page, NavigatedData } from 'tns-core-modules/ui/page/page';

export function pageLoaded(args: NavigatedData) {
     let page = <Page>args.object;
    page.bindingContext = new ForumViewViewModel();
}

