import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { screen, device } from 'tns-core-modules/platform/platform'
import * as frame from 'tns-core-modules/ui/frame/frame';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';

import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getRootView, android } from 'tns-core-modules/application/application';
import { localStorage, api } from '~/shared/env';
import { request } from 'tns-core-modules/http/http';
import "nativescript-appversion"
import { getVersionName } from 'nativescript-appversion';
import { version } from 'moment';
import {Label} from 'tns-core-modules/ui/label'

export class TabviewViewModel extends Observable {
    private static previousMenu: StackLayout;
    menu;
    screenWidth;
    page: Page
    version: string
    profile

    constructor(page: Page) {
        super();
        // this.menuPos()
        this.page = page
        this.screenWidth = - screen.mainScreen.widthDIPs

        this.profile = JSON.parse(localStorage.getString('profile'))
        // console.log(localStorage.getString('profile'))

        getVersionName().then(d => {
            this.version = d
            this.notifyPropertyChange('version', d)
        })

    }

    public onOpenDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    }

    public onCloseDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>getRootView().getViewById("sideDrawer");
        sideDrawer.closeDrawer();

    }


    navigate(ev: EventData) {

        let tappedMenu = <StackLayout>ev.object;
        let view = frame.topmost().getViewById('frame')

        // prevent consecutive navigation to the same page
        if (tappedMenu == TabviewViewModel.previousMenu) {
            return;
        } else {
            TabviewViewModel.previousMenu = tappedMenu;
        }

        console.log(`views/${tappedMenu.id}/${tappedMenu.id}-page`)
        view.set("defaultPage", `views/${tappedMenu.id}/${tappedMenu.id}-page`);
        //    frame.topmost().navigate({moduleName:`views/${tappedMenu.id}/${tappedMenu.id}-page`})
        this.onCloseDrawerTap()
    }

    async logout(ev) {
        console.log('loging out')
        
        let selected = <StackLayout>ev.object
        var page = selected.page.frame

        page.navigate({
            moduleName: "views/login/login-page",
            transition: {
                name: "slideRight",
                // duration: 300
            }
        })

        await request({
            url: api.logout.url + `?access_token=${localStorage.getString('token')}`,
            method: api.login.method,
        })
        
        localStorage.clear()
    }

    credit(ev:EventData){
        var page = <Page>ev.object
        this.onCloseDrawerTap()
        // var credits = page.loadView()
        page.showModal('views/credits/credits-page',{},()=>{})
        
    }

}

