/** @odoo-module **/

import {MessagingMenu} from "@mail/core/web/messaging_menu";
import {useState} from "@odoo/owl";
import {patch} from "@web/core/utils/patch";
import {useService} from "@web/core/utils/hooks";

patch(MessagingMenu.prototype, {
    setup() {
        this.state = useState({
            hasDiscussGroup: false,
        });
        this.user = useService("user");
        super.setup();
        this.user.hasGroup("mail_discuss_security.group_discuss").then((hasGroup) => {
            this.state.hasDiscussGroup = hasGroup;
        });
    },

    get shouldRender() {
        return this.state.hasDiscussGroup;
    },
});
