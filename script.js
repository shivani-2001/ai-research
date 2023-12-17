function filterApplications() {
    var input, filter, applications, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    applications = document.getElementsByClassName('application');

    for (i = 0; i < applications.length; i++) {
        txtValue = applications[i].textContent || applications[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            applications[i].style.display = "";
        } else {
            applications[i].style.display = "none";
        }
    }
}
