import { apiCallDocs, apiCallSearch } from './../src/apiCall';

import './styles.css';


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    let search = $("#search").val();
    let term = $("input#term").val();
    if (search == "Name") {
      apiCallDocs(term);
      $("#message").text("Returning first 20 doctors with offices within 25 mi of Portland, OR that match the name: " + term);
    } else {
      apiCallSearch(term);
      $("#message").text("Returning first 20 doctors with offices within 25 mi of Portland, OR that can treat the symptom: " + term);
    }
    $("#answer").show(1000);
  });
});
