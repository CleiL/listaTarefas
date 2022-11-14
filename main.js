$(document).ready(function() {
    $('#btn-cadastro').click(function() {
        $('#lista-tarefas').slideDown();
    })



    $('form').on('submit', function(e) 
    {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const tarefanova = $('<li></li>');
        $(`<a href="#">${novaTarefa}</a>`).appendTo(tarefanova);
        $(tarefanova).appendTo('ul')
        $('#tarefa').val('');
        $(tarefanova).click(function() {
            $(this).css('text-decoration', 'line-through');    
        })
        
    })
})