import { Observable, EventData } from 'tns-core-modules/data/observable';
import { Page, Color } from 'tns-core-modules/ui/page/page';
import {TextView} from 'tns-core-modules/ui/text-view/text-view'
import { device, screen } from 'tns-core-modules/platform/platform';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { Button } from 'tns-core-modules/ui/button/button';
import { action, prompt, confirm } from 'tns-core-modules/ui/dialogs'
import { topmost } from 'tns-core-modules/ui/frame/frame';

export class ForumViewViewModel extends Observable {
    reply:string;
    lorem: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ipsum, malesuada eget cursus fermentum, condimentum non urna. Mauris ullamcorper malesuada elit ac vehicula. Aliquam erat volutpat. Mauris pulvinar ipsum sit amet tellus tincidunt fermentum. Proin eu orci felis. Sed volutpat vehicula tortor, laoreet vestibulum justo faucibus non. Vivamus vel laoreet justo. Nullam consequat magna faucibus vestibulum cursus. Ut sed erat dignissim, lobortis massa sit amet, vulputate est. In elit enim, fermentum sed euismod non, porttitor sit amet massa. Fusce dapibus congue mauris non placerat. Nam magna nisl, auctor eu nibh a, ornare fermentum nisi. Nullam vehicula diam nec pharetra consectetur. Ut fermentum pretium eros eu lacinia.
    
    Vestibulum tempor quis massa eu tincidunt. Maecenas aliquam vestibulum ante, ut posuere sem vestibulum sed. Vivamus ut interdum enim, non rhoncus magna. Sed gravida, odio ut ornare ultrices, nibh nunc sollicitudin metus, id scelerisque velit massa ut lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque elementum, sem id tristique cursus, purus erat iaculis sapien, id semper nulla turpis tristique mi. Etiam vel porttitor elit, a bibendum tortor. Sed vestibulum eleifend semper. Etiam accumsan elit leo, vitae faucibus felis commodo ut. Suspendisse molestie lacus sem, ut varius lorem fringilla at.
        
    Morbi pretium, ex auctor consequat efficitur, leo magna imperdiet leo, in tristique erat nisl nec orci. Nulla tempor, arcu a consequat lobortis, neque enim ultrices augue, nec egestas velit sem vel odio. Curabitur ullamcorper tristique lorem, tincidunt blandit nulla efficitur id. Sed vel egestas sapien. Ut eleifend libero et lorem consequat hendrerit. Suspendisse risus tellus, consectetur iaculis accumsan eu, vestibulum in magna. Curabitur varius egestas mauris vel aliquam. Donec nisl tortor, ornare at lectus ut, suscipit auctor dui. Nam eget gravida lacus. Quisque gravida, neque nec vulputate pulvinar, ligula nisi mattis felis, id congue nisi massa tempor ipsum. Phasellus dignissim metus sed erat tempor suscipit. Nam tincidunt sollicitudin suscipit. Curabitur sit amet lectus ante. Sed eleifend tempor ultrices. Etiam nec facilisis leo.
        `
    lorem2: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque ipsum, malesuada eget cursus fermentum, condimentum non urna. Mauris ullamcorper malesuada elit ac vehicula. Aliquam erat volutpat. Mauris pulvinar ipsum sit amet tellus tincidunt fermentum. Proin eu orci felis. Sed volutpat vehicula tortor, laoreet vestibulum justo faucibus non. Vivamus vel laoreet justo. Nullam consequat magna faucibus vestibulum cursus. Ut sed erat dignissim, lobortis massa sit amet, vulputate est. In elit enim, fermentum sed euismod non, porttitor sit amet massa. Fusce dapibus congue mauris non placerat. Nam magna nisl, auctor eu nibh a, ornare fermentum nisi. Nullam vehicula diam nec pharetra consectetur. Ut fermentum pretium eros eu lacinia.`

    constructor() {
        super();
    }

    replyMessage(ev:EventData){
        var field = <Page>ev.object
        var newField = new TextView()
        var stack = new StackLayout()
        var btn = new Button()

        newField.minWidth = screen.mainScreen.widthPixels
        newField.minHeight= screen.mainScreen.heightPixels/10
        newField.color = new Color("black")
        newField.text = this.reply

        // newField.notifyPropertyChange()
        
        
        btn.text = "Reply"
        btn.on("tap",(a)=>{
            this.reply = newField.text
            // newField.text = this.reply
            newField.closeModal()
            confirm("Confirm reply").then(val=>{
                if(!val){
                    this.notifyPropertyChange("reply", newField.text)
                    
                }else{
                    
                    this.notifyPropertyChange("reply", "")
             }
    
         })
            
        })

       stack.addChild(newField)
       stack.addChild(btn)
       

        
        field.showModal(stack,'',()=>{})
    }

    goBack(ev:EventData){
        var page = <Page>ev.object

    topmost().goBack()
    }
}
