

riot.tag2('grid-footer', '<tr> <th colspan="{opts.gridOptions.properties.dataColumns.length} "> <div class="ui right floated pagination menu"><a class="icon item {&quot;disabled&quot;: isFirstPage()}" onclick="{firstPage}"><i class="icon angle double left"> </i></a><a class="icon item {&quot;disabled&quot;: isFirstPage()}" onclick="{previousPage}"><i class="left chevron icon"></i></a><a class="item">{String.format(\'Página {0} de {1}\', currentPage, totalPages)}</a><a class="icon item {&quot;disabled&quot;: isLastPage()}" onclick="{nextPage}"><i class="right chevron icon"></i></a><a class="icon item {&quot;disabled&quot;: isLastPage()}" onclick="{lastPage}"><i class="icon angle double right"> </i></a></div> </th> </tr>', '', 'class="grid-footer full-width"', function(opts) {
gridFooterTag.call(this, this.opts)
});