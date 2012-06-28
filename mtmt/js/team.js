$(document).ready(function() {
    //点击添加任务按钮
    $('#addTaskButton').live('click', function() {
        $('#addTaskArea textarea').val("");
        $('#addTaskArea').slideToggle("fast");
        return false;
    });

    //选择执行者
    $('.selectExecutorButton').live('click', function() {
        $('#addTaskArea .teamMember').toggle("fast");
        return false;
    });
    $('#allMember #button .btn').live('click', function() {
        $('#addTaskArea .teamMember').hide("fast");
        return false;
    });

    //添加任务后返回
    $('#addTaskArea #addTask').live('click', function() {
        $('#addTaskArea').slideUp("fast");
        return false;
    });
});