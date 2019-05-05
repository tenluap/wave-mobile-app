import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { screen } from 'tns-core-modules/platform/platform'
import { Frame, topmost } from 'tns-core-modules/ui/frame/frame';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout'
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

export class TabviewViewModel extends Observable {
    private static previousMenu: StackLayout;
    menu: Frame;
    device: any;
    page: Page

    constructor(page: Page) {
        super();
        // this.menuPos()
        this.page = page
        this.device = screen.mainScreen

        this.menu = <Frame>page.getViewById('menu')
        this.menu.translateX = -this.device.widthDIPs

    }
    navigate(ev: EventData) {

        let tappedMenu = <StackLayout>ev.object;
        let rootView = <GridLayout>tappedMenu.parent.parent
        let frame = <Frame>this.page.getViewById('frame')

        // prevent consecutive navigation to the same page
        if (tappedMenu == TabviewViewModel.previousMenu) {
            return;
        } else {
            TabviewViewModel.previousMenu = tappedMenu;
        }

        // topmost().navigate({
        //     moduleName: `views/${tappedMenu.id}/${tappedMenu.id}-page`,
        //     clearHistory: true

        // })

        console.log(`views/${tappedMenu.id}/${tappedMenu.id}-page`)
        frame.set("defaultPage", `views/${tappedMenu.id}/${tappedMenu.id}-page`);

    }

    toggleMenu(ev: EventData) {
        let btn = <Page>ev.object
        let content = <GridLayout>this.page.getViewById('content')
        let frame = <Frame>this.page.getViewById('frame')
        // // console.log(content)
        if(this.menu.translateX < 0){
            this.menu.animate({
                translate:{x:0,y:0}
            })
            content.isUserInteractionEnabled= false
        }else{
            this.menu.animate({
                translate:{x:-this.device,y:0}
            })
            content.isUserInteractionEnabled=true
        }
    }


}
