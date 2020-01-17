/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.1 (2019-10-28)
 */

!function(){"use strict";function n(n,e){return function(o){o.setActive(e.get());function t(t){return o.setActive(t.state)}return n.on("VisualBlocks",t),function(){return n.off("VisualBlocks",t)}}}var e=function(t){function o(){return n}var n=t;return{get:o,set:function(t){n=t},clone:function(){return e(o())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(t,o){t.fire("VisualBlocks",{state:o})},u=function(t,o,n){t.dom.toggleClass(t.getBody(),"mce-visualblocks"),n.set(!n.get()),i(t,n.get())},c=function(t,o,n){t.addCommand("mceVisualBlocks",function(){u(t,o,n)})},s=function(t){return t.getParam("visualblocks_default_state",!1,"boolean")},l=function(o,t,n){o.on("PreviewFormats AfterPreviewFormats",function(t){n.get()&&o.dom.toggleClass(o.getBody(),"mce-visualblocks","afterpreviewformats"===t.type)}),o.on("init",function(){s(o)&&u(o,t,n)}),o.on("remove",function(){o.dom.removeClass(o.getBody(),"mce-visualblocks")})},r=function(t,o){t.ui.registry.addToggleButton("visualblocks",{icon:"visualblocks",tooltip:"Show blocks",onAction:function(){return t.execCommand("mceVisualBlocks")},onSetup:n(t,o)}),t.ui.registry.addToggleMenuItem("visualblocks",{text:"Show blocks",onAction:function(){return t.execCommand("mceVisualBlocks")},onSetup:n(t,o)})};!function o(){t.add("visualblocks",function(t,o){var n=e(!1);c(t,o,n),r(t,n),l(t,o,n)})}()}();
