/** @odoo-module **/

import {MessagingMenu} from "@mail/core/public_web/messaging_menu";
import {useState} from "@odoo/owl";
import {patch} from "@web/core/utils/patch";
import {user} from "@web/core/user";

patch(MessagingMenu.prototype, {
    setup() {
        this.state = useState({
            hasDiscussGroup: false,
        });
        super.setup();
        user.hasGroup("mail_discuss_security.group_discuss").then((hasGroup) => {
            this.state.hasDiscussGroup = hasGroup;
        });
    },

    get shouldRender() {
        return this.state.hasDiscussGroup;
    },
});
