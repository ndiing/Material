import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoImage extends MdComponent {

/**
 * @private
 */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image style="width:64px;" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image style="width:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image style="height:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image style="width:64px;" ratio="16/9" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="3/2" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="4/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="1/1" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="3/4" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="width:64px;" ratio="2/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-image style="height:64px;" ratio="16/9" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="3/2" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="4/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="1/1" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="3/4" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                        <md-image style="height:64px;" ratio="2/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-image", DemoImage);
export default document.createElement("demo-image");
