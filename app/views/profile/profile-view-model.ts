import { Observable } from 'tns-core-modules/data/observable';
import { localStorage } from '~/shared/env';
import { ImageSource, fromFile, fromResource, fromBase64 } from "tns-core-modules/image-source";
import { Folder, knownFolders, path } from 'tns-core-modules/file-system/file-system';

export class ProfileViewModel extends Observable {
    profile;
    constructor() {
        super();
        this.profile = JSON.parse(localStorage.getString('profile'))
    }

    getImg() {
        const folder: Folder = <Folder>knownFolders.currentApp();
        const folderPath: string = path.join(folder.path, "images/logo.png");
        const imageFromLocalFile: ImageSource = <ImageSource>fromFile(folderPath);
    }
}
