//Display the current day at the top of the calender when a user opens the planner.

const date = dayjs().format('dddd, D MMM YYYY');
console.log(date);
$("#currentDay").text(date);

// function to save to local storage when button is clicked
	// get the values
	// store them
    
    // function to update classes hours change
        // get current time
        // comptare against those in your time blocks
        // update the classes

    // remember to call your update function on page load
    // remember to also get values from local storage and set them on page load