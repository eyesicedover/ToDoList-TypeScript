
export function displayResult(response) {
  if (response.data.length == 0) {
    $("#error").html("<h3>There are no doctors in your area that match this seach.</h3>");
  } else {
    for (let i = 0; i < response.data.length; i++) {
      let prefix = response.data[i];
      let counter = 1;
      let docFirstName = prefix.profile.first_name;
      let docLastName = prefix.profile.last_name;
      for (let j = 0; j < prefix.practices.length; j++) {
        if (prefix.practices[j].within_search_area == true) {
          if (counter == 1) {
            $("#results").append("<li><b>Name:</b> " + docFirstName + " " + docLastName + "</li>");
          }
          let phone = "";
          let website = "none";
          let address = prefix.practices[j].visit_address.street + ", " + prefix.practices[j].visit_address.city + ", " + prefix.practices[j].visit_address.state + " " + prefix.practices[j].visit_address.zip;
          let newPatients = prefix.practices[j].accepts_new_patients;
          for (let k = 0; k < prefix.practices[j].phones.length; k++) {
            if (prefix.practices[j].phones[k].type == "landline") {
              phone = prefix.practices[j].phones[k].number;
            }
          }
          if (prefix.practices[j].website != null) {
            website = prefix.practices[j].website;
            $("#results").append("<ul><li><u>Address " + counter + ":</u> " + address + "</li><li><u>Website:</u> <a href='" + website + "' target='_blank'>CLICK HERE</a></li><li><u>Accepting New Patients:</u> " + newPatients + "</li><li><u>Phone:</u> " + phone + "</li></ul>");
          } else {
            $("#results").append("<ul><li><u>Address " + counter + ":</u> " + address + "</li><li><u>Website:</u> None </li><li><u>Accepting New Patients:</u> " + newPatients + "</li><li><u>Phone:</u> " + phone + "</li></ul>");
          }
          counter++;
        }
      }
    }
  }
}
