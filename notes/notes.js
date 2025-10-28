function savenotes() {
    var updateNotes = document.createEvent('Event');
    updateNotes.initEvent('updatenote', true, false); // just want to make sure it's clear that this command was deprecated when i wrote it
    document.dispatchEvent(updateNotes);
}