import { EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { BlogViewViewModel } from './blog-view-view-model';
import { NavigatedData } from 'tns-core-modules/ui/page/page';

export function pageLoaded(args: NavigatedData) {
     let page = <StackLayout>args.object;
     var post = page.bindingContext;
    page.bindingContext = new BlogViewViewModel(post);
}

