document.addEventListener('DOMContentLoaded', function() {
  const issueForm = document.getElementById('issueForm');
  const issueList = document.getElementById('issue-list');

  issueForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const issueTitle = document.getElementById('issueTitle').value;
    const issueDescription = document.getElementById('issueDescription').value;
    const priority = document.getElementById('priority').value;
    const assignedTo = document.getElementById('assignedTo').value;
    const attachment = document.getElementById('attachment').value;

    if (issueTitle && issueDescription && priority && assignedTo) {
      const issueItem = document.createElement('div');
      issueItem.innerHTML = `
        <h3>${issueTitle}</h3>
        <p><strong>Description:</strong> ${issueDescription}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Assigned To:</strong> ${assignedTo}</p>
        <p><strong>Attachment:</strong> ${attachment || 'No attachment'}</p>
        <button onclick="updateIssue(this)">Update</button>
        <button onclick="deleteIssue(this)">Delete</button>
      `;

      issueList.appendChild(issueItem);
      issueForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });
});

function deleteIssue(button) {
  const issueItem = button.parentElement;
  issueItem.remove();
}

function updateIssue(button) {
  // Implement update functionality based on your requirements
  // You might want to populate the form fields with existing data for editing
  // and then handle the update accordingly.
}