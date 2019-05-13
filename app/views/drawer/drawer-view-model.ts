import { Observable, EventData } from 'tns-core-modules/data/observable';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';


export class DrawerViewModel extends Observable {
    constructor() {
        super();
    }

    navTo(ev: EventData) {

            let tappedMenu = <StackLayout>ev.object;
            let rootView = <GridLayout>tappedMenu.parent.parent
    
            // prevent consecutive navigation to the same page
        
    
            console.log(`views/${tappedMenu.id}/${tappedMenu.id}-page`)
            // frame.set("defaultPage", `views/${tappedMenu.id}/${tappedMenu.id}-page`);
    
        
    

    }
}
