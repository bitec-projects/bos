

riot.tag2('alert', '<div class="ui segment alert-container"> <form class="alert-form ui tiny equal width form error" autocomplete="off"> <input type="hidden" id="alert-id"> <div class="ui grid wide middle aligned"> <div class="row"> <div class="ui error message"></div> </div> <div class="row four columns"> <div class="column"> <div class="field"> <label>Título</label> <input class="firstFocus" type="text" id="alert-title" placeholder="Informe o título do alert"> </div> </div> <div class="column"> <div class="field"> <label>Tipo de Alerta</label> <div id="alert-type-id"> <div class="lookup-combobox-types"></div> </div> </div> </div> <div class="column"> <div class="field"> <label>Início da Vigência</label> <input id="alert-start-date" placeholder="Data de início do alerta" type="date"> </div> </div> <div class="column"> <div class="field"> <label>Fim da Vigência</label> <input id="alert-end-date" placeholder="Data de fim do alerta" type="date"> </div> </div> </div> <div class="row four columns"> <div class="column"> <div class="field"> <label>Público Alvo</label> <div id="alert-actor-id"> <div class="lookup-combobox-actors"></div> </div> </div> </div> <div class="column"> <div class="field"> <label>Grupo de Usuários</label> <div id="alert-user-group-id"> <div class="lookup-combobox-user-groups"></div> </div> </div> </div> <div class="column"> <div class="field"> <label>Usuários</label> <div id="alert-user-id"> <div class="lookup-combobox-users"></div> </div> </div> </div> <div class="column"> <div class="field"> <label>Alerta Ativo?</label> <div class="ui toggle checkbox"> <input class="hidden" type="checkbox" id="alert-is-active" data-type="checkbox" tabindex="0"> </div> </div> </div> </div> <div class="row one columns"> <div class="column"> <div class="field"> <label>Alerta</label> <textarea type="text" id="alert-alert" placeholder="Digite o aviso que deseja emitir"></textarea> </div> </div> </div> </div> </form> </div>', '', 'class="alert-tag"', function(opts) {
alertTag.call(this, this.opts)
});