

riot.tag2('user-group', '<div class="ui segment user-group-container"> <form class="user-group-form ui tiny equal width form error" autocomplete="off"> <input type="hidden" id="user-group-id"> <div class="ui grid wide middle aligned"> <div class="row"> <div class="ui error message"></div> </div> <div class="row two columns"> <div class="column"> <div class="field"> <label>Nome do Grupo</label> <input class="firstFocus" type="text" id="user-group-name" placeholder="Nome do Grupo de Usuários"> </div> </div> <div class="column"> <div class="field"> <label>Grupo Ativo?</label> <div class="ui toggle checkbox"> <input class="hidden" type="checkbox" id="user-group-active" data-type="checkbox" tabindex="0"> </div> </div> </div> </div> </div> </form> <div class="ui secondary menu"><a class="ignore active item" data-tab="users">Usuários</a><a class="ignore item" data-tab="menus">Menus</a><a class="ignore item" data-tab="permissions">Permissões</a><a class="ignore item" data-tab="dimensions">Filtros (dimensões)</a></div> <div class="ui tab active segment" data-tab="users"> <div id="user-group-users"></div> </div> <div class="ui tab segment" data-tab="menus"> <div id="user-group-menus"></div> </div> <div class="ui tab segment" data-tab="permissions"> <div id="user-group-permissions"></div> </div> <div class="ui tab segment" data-tab="dimensions"> <div id="user-group-dimensions"></div> </div> </div>', '', 'class="user-group-tag"', function(opts) {
userGroupTag.call(this, this.opts)
});