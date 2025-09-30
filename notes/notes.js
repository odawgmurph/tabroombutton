function savenotes() {
    var updateNotes = document.createEvent('Event');
    updateNotes.initEvent('updatenote', true, false);
    document.dispatchEvent(updateNotes);
}