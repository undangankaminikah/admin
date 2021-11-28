// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});

function deleteConfirm(url){
    $('#btnDelete').attr('href', url);
    $('#deletemodal').modal('show');
}
