$(document).ready(function() {
    $('#btn-cadastro').click(function() {
        $('#lista-tarefas').slideDown();
    })
    $('#testando').click(function() {
        $(this).css('text-decoration', 'line-through');    
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const tarefanova = $('<li></li>');
        $(`<a href="#">${novaTarefa}</a>`).appendTo(tarefanova);
        $(tarefanova).appendTo('ul')
        $('#tarefa').val('');
    })
})