

riot.tag2('grid-command-button', '<button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.add)&gt;-1}" button-type="{helpersWebApp.both().actions.add}" button-click="{addClick}" button-enabled="{typeof(parent.opts.collection.permissionOptions)!==&quot;undefined&quot; &amp;&amp; parent.opts.collection.permissionOptions.canAdd}"> </button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.filter)&gt;-1}" button-type="{helpersWebApp.both().actions.filter}" button-click="{filterClick}" button-active="{parent.opts.collection.filtered}"> </button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.confirm)&gt;-1}" button-type="{helpersWebApp.both().actions.confirm}" button-click="{confirmClick}"></button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.clear)&gt;-1}" button-type="{helpersWebApp.both().actions.clear}" button-click="{clearClick}"></button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.close)&gt;-1}" button-type="{helpersWebApp.both().actions.close}" button-click="{closeClick}"></button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.save)&gt;-1}" button-type="{helpersWebApp.both().actions.save}" button-click="{saveClick}"></button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.cancel)&gt;-1}" button-type="{helpersWebApp.both().actions.cancel}" button-click="{cancelClick}"></button-tag> <button-tag if="{showButtons.indexOf(helpersWebApp.both().actions.export)&gt;-1}" button-type="{helpersWebApp.both().actions.export}" button-click="{exportClick}"></button-tag>', '', 'class="grid-command-button"', function(opts) {
gridCommandButtonTag.call(this, this.opts)
});