import { Observable } from 'tns-core-modules/data/observable';
import { localStorage } from '~/shared/env';
import * as imagepicker from "nativescript-imagepicker";
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

export class ProfileViewModel extends Observable {
    profile;
    constructor() {
        super();
        this.profile = JSON.parse(localStorage.getString('profile'))
    }

    pickimg() {
        var images:[]
        let context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });

    
        context
            .authorize()
            .then(function () {
                return context.present();
            })
            .then(d=>{
              
                console.log()
            })
                // list.items = selection;
            
    }
}
