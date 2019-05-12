import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page, View } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { topmost } from 'tns-core-modules/ui/frame/frame';
import * as SocialShare from "nativescript-social-share"
export class BlogViewViewModel extends Observable {
    constructor() {
        super();
    }

    lorem:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ipsum, malesuada eget cursus fermentum, condimentum non urna. Mauris ullamcorper malesuada elit ac vehicula. Aliquam erat volutpat. Mauris pulvinar ipsum sit amet tellus tincidunt fermentum. Proin eu orci felis. Sed volutpat vehicula tortor, laoreet vestibulum justo faucibus non. Vivamus vel laoreet justo. Nullam consequat magna faucibus vestibulum cursus. Ut sed erat dignissim, lobortis massa sit amet, vulputate est. In elit enim, fermentum sed euismod non, porttitor sit amet massa. Fusce dapibus congue mauris non placerat. Nam magna nisl, auctor eu nibh a, ornare fermentum nisi. Nullam vehicula diam nec pharetra consectetur. Ut fermentum pretium eros eu lacinia.
    
Vestibulum tempor quis massa eu tincidunt. Maecenas aliquam vestibulum ante, ut posuere sem vestibulum sed. Vivamus ut interdum enim, non rhoncus magna. Sed gravida, odio ut ornare ultrices, nibh nunc sollicitudin metus, id scelerisque velit massa ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque elementum, sem id tristique cursus, purus erat iaculis sapien, id semper nulla turpis tristique mi. Etiam vel porttitor elit, a bibendum tortor. Sed vestibulum eleifend semper. Etiam accumsan elit leo, vitae faucibus felis commodo ut. Suspendisse molestie lacus sem, ut varius lorem fringilla at.
    
Morbi pretium, ex auctor consequat efficitur, leo magna imperdiet leo, in tristique erat nisl nec orci. Nulla tempor, arcu a consequat lobortis, neque enim ultrices augue, nec egestas velit sem vel odio. Curabitur ullamcorper tristique lorem, tincidunt blandit nulla efficitur id. Sed vel egestas sapien. Ut eleifend libero et lorem consequat hendrerit. Suspendisse risus tellus, consectetur iaculis accumsan eu, vestibulum in magna. Curabitur varius egestas mauris vel aliquam. Donec nisl tortor, ornare at lectus ut, suscipit auctor dui. Nam eget gravida lacus. Quisque gravida, neque nec vulputate pulvinar, ligula nisi mattis felis, id congue nisi massa tempor ipsum. Phasellus dignissim metus sed erat tempor suscipit. Nam tincidunt sollicitudin suscipit. Curabitur sit amet lectus ante. Sed eleifend tempor ultrices. Etiam nec facilisis leo.
    `
    lorem2:string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ipsum, malesuada eget cursus fermentum, condimentum non urna. Mauris ullamcorper malesuada elit ac vehicula. Aliquam erat volutpat. Mauris pulvinar ipsum sit amet tellus tincidunt fermentum. Proin eu orci felis. Sed volutpat vehicula tortor, laoreet vestibulum justo faucibus non. Vivamus vel laoreet justo. Nullam consequat magna faucibus vestibulum cursus. Ut sed erat dignissim, lobortis massa sit amet, vulputate est. In elit enim, fermentum sed euismod non, porttitor sit amet massa. Fusce dapibus congue mauris non placerat. Nam magna nisl, auctor eu nibh a, ornare fermentum nisi. Nullam vehicula diam nec pharetra consectetur. Ut fermentum pretium eros eu lacinia.`

    shareBtn(ev:EventData){
        let shr = <Page>ev.object
       
        SocialShare.shareUrl("https://google.com","Google")
        // shr.showModal("/shared/share/share-page","", ()=>{

        // })

    }

    goBack(ev:EventData){
        var btn = <Page>ev.object
        topmost().goBack()
    }
}
    