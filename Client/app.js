function getBathValue() {
    var uiBathrooms = document.getElementById("uiBathrooms");
    if (uiBathrooms) {
        return uiBathrooms.value;
    }
    return -1; 
}
  
function getBHKValue() {
    var uiBHK = document.getElementById("uiBHK");
    if (uiBHK) {
        return uiBHK.value;
    }
    return -1; 
}

function estimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    // Check if any value is negative
    if (parseFloat(sqft.value) < 0 || bhk < 0 || bathrooms < 0) {
        estPrice.innerHTML = "<h2>Please enter valid values</h2>";
        return; // Exit function if any value is negative
    }

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value
    }, function(data, status) {
        console.log(data.estimated_price);
        if (parseFloat(data.estimated_price) < 0) {
            estPrice.innerHTML = "<h2>Please enter valid values</h2>";
        } else {
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh Rupees</h2>";
        }
        console.log(status);
    });
}


function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_location_names"; 
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            for(var i in locations) {
                var opt = new Option(locations[i]);
                uiLocations.appendChild(opt);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    onPageLoad();
});
