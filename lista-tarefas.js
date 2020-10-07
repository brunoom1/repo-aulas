
(function () {
    "use strict";

    /* factory */
    function criar_tarefa(titulo) {
        return {
            text: titulo,
            feito: false
        };
    }

    /* class TarefasController */
    function TarefasController() {
        this.tarefas = [
            criar_tarefa('teste 1'),
            criar_tarefa('teste 2')
        ];
        this.tarefaText = "";
    }

    /* mostra tarefas em aberto */
    function restam() {
        return this.tarefas.filter(function (tarefa) { 
            return !tarefa.feito 
        }).length;
    }

    function addTarefa() {
        this.tarefas.push(criar_tarefa(this.tarefaText));        
    }

    TarefasController.prototype = {
        restam: restam,
        addTarefa: addTarefa,
    }

    angular.module('ControleTarefas', []);
    angular.module('ControleTarefas')
        .controller("Tarefas", TarefasController);

})();