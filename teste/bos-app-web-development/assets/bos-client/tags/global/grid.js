

riot.tag2('grid', '<div class="grid-content"> <div class="grid-loading ui dimmer inverted"> <div class="content"> <div class="ui text medium loader">Processando, aguarde</div> </div> </div> <h4 class="ui horizontal divider header" if="{opts.properties.showHeader}"> <label>{opts.properties.name}</label> </h4> <table class="{opts.properties.class || &quot;compact striped&quot;} {opts.properties.size} {sortable: opts.properties.sortable} ui table unstackable" id="{opts.gridId}"> <thead> <tr if="{opts.properties.actionRow}"> <th class="center aligned" colspan="{(opts.properties.gridType == helpersWebApp.gridType.crud) ? opts.properties.dataColumns.length : opts.properties.chartColumnsTitle.length}"><a class="ui basic orange label" if="{typeof(opts.properties.label)!=&quot;undefined&quot;}">{opts.properties.label}</a> <div class="grid-screen-content"> <div class="screen-crud" data-id="{this.gridId}"></div> </div> <div class="grid-filter-content"> <div class="grid-filter" data-id="{this.gridId}"></div> </div> <grid-command-button></grid-command-button> </th> </tr> <tr> <th class="wide {(col.weight) ? col.weight : &quot;two&quot;} {(typeof col.title.class == &quot;string&quot;) ? col.title.class : &quot;&quot;}" each="{col in (opts.properties.gridType == helpersWebApp.gridType.crud) ? opts.properties.dataColumns : opts.properties.chartColumnsTitle}"> <label class=" {(typeof col.title == &quot;object&quot;) ? col.title.class : &quot;&quot;}" if="{col.title.type == &quot;text&quot; || typeof col.title != &quot;object&quot;}">{(typeof col.title == ⁗object⁗) ? col.title.content : col.title}</label> <label class="{(typeof col.title == &quot;object&quot;) ? col.title.class : &quot;&quot;}" if="{col.title.type == &quot;html&quot;}">{col.title.content}</label> <label class="{(typeof col.title == &quot;object&quot;) ? col.title.class : &quot;&quot;} " if="{col.title.type == &quot;icon&quot;}"><i class="icon {(typeof col.title == &quot;object&quot;) ? col.title.class : &quot;&quot;}"></i></label> </th> </tr> <tbody class="{_gridId}"> </tbody> <tfoot class="{_gridId}" if="{opts.properties.gridType == helpersWebApp.gridType.crud &amp;&amp; opts.properties.showPagination}"> </tfoot> </thead> </table> </div>', '', 'class="grid-tag"', function(opts) {
gridTag.call(this, this.opts)
});