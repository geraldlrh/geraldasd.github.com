$(document).ready(function() {
    //点击添加任务按钮
    $('#addTaskButton').live('click', function() {
        $('#addTaskArea textarea').val("");
        $('#addTaskArea').slideToggle("fast");
        return false;
    });

    //添加任务后返回
    $('#addTaskArea #addTask').live('click', function() {
        $('#addTaskArea').slideUp("fast");
        return false;
    });
});