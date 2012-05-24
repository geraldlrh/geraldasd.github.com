$(document).ready(function () {
    //global var
    var noteId = '0';
    //Clear warning div on page load
    $('#warning').html('').hide();
    //hide help div on page load
    $('.Intro').hide();
    //Clear notepad on page load
    $('#notePad').val('');
    //put focus on the textarea to write a new note
    $('#notePad').focus();

    //show window help when help is clicked
    $('.Help').click(function () {
        $('.Intro').fadeIn('fast');
        $('#warning').html('').hide();
    }); //end of click to open help window

    //Close the help div when clicking the close button
    $('.CloseWin').click(function (e) {
        $('.Intro').hide();
        e.preventDefault();
    }); //end of click for close help window

    //clicking the board clears the message
    $('#boardContainer').click(function () {
        $('#warning').html('').hide();
    }); //end of click

    $('#bottomSection div').live('dragstart', function (event) {
        //clear the warning div
        $('#warning').html('').hide();
        //set id of draggable item with dataTransfer object
        event.originalEvent.dataTransfer.setData('text', event.target.getAttribute('id'));
    }); //end of dragstart

    //Bind dragover event to the board and the basket so the notes can be
    //dragged over both objects
    $('#boardContainer, #basket').bind('dragover', function (event) {
        event.preventDefault();
        //clear the warning div
        $('#warning').html('').hide();
    }); //end of dragover for board

    //Bind drop event
    $('#bottomSection').bind('drop', function (event) {
        var myNote = event.originalEvent.dataTransfer.getData('text');
        var myTarget = event.target;
        $(myTarget).append($('#' + myNote));
        //clear the warning div
        $('#warning').html('').hide();
        event.preventDefault();
    }); //end of drop

    $('#basket img').bind('drop', function (event) {
        //Create the key value pairs to associate note id with message
//        var draggedNote = {};
//        draggedNote['haveBreakfast'] = '吃早餐了吗亲?';
//        draggedNote['brushTeeth'] = '记得刷牙哦!';
//        draggedNote['goToWork'] = ':)';
//        draggedNote['walkDog'] = "人类最好的朋友？";
//        draggedNote['callMum'] = '如果我是你，我不会扔掉它';
//        draggedNote['newNote' + noteId] = '新增的便签';
        //retrieve id of note
        var myNote = event.originalEvent.dataTransfer.getData('text');
        //remove the note from the page as it has been dropped in the basket
        $('#' + myNote).remove();
        //use id of note to call the key and display the associated message
        $('#warning').html(draggedNote[myNote]).show();
        //prevent default behavior
        event.preventDefault();
    }); //end of drop for basket

    //Create a new note when the stick note btn is clicked
    $('.BtnWriteNote').click(function (e) {
        //set up a unique note id with a random number
        noteId = Math.floor(Math.random() * 11)
        //Retrieve note text
        var noteText = $('#notePad').val();
        //build the html for the new note
        var newNote = '<div id="newNote' + noteId + '" draggable="true" class="Note">' + noteText + '</div>';
        //append the new note at the bottom section of the board
        $('#bottomSection').prepend(newNote);
        //Clear notepad on sticking note to the board
        $('#notePad').val('');
        //reset focus on textarea
        $('#notePad').focus();
        e.preventDefault();
    }); //end of click for stick note button
});  //end of ready
