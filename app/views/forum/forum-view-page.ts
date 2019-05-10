import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { ForumViewViewModel } from './forum-view-view-model';

export function pageLoaded(args: EventData) {
     let page = <StackLayout>args.object;
    page.bindingContext = new ForumViewViewModel();
}

