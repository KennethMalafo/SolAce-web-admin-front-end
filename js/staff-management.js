//Click event for adding staff account
$(document).ready(function() {
    $('#addUserBtn').click(function() {
        $('#staffTable').hide();
        $('#addUserForm').show();
      });
  });
// Click event for Submit Account button
$('#submitUserBtn').click(function() {
    alert('Sucessfully added account...');
    // Implement your logic for sending alerts here
    $('#staffTable').show();
    $('#addUserForm').hide();
  });