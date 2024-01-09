//Display when a user opens the planner.

$(function() {
    const date = dayjs().format('dddd, D MMM YYYY');
    console.log(date);
    $("#currentDay").text(date);

    assignBackgroundColour()
});


//Get the current time:
    // const currentTime = dayjs().format('hA');
    // console.log(currentTime);


 // Assign background colour depending on the time-block hour: past, present, or future
//  let textArea = $('.eventEnter');
//  var hour = $('.hour').attr('id');
//  (function assignBackgroundColour() {
//     console.log(hour)
//     if (hour < dayjs().hour()) {
//         textArea.addClass("past");
//     } else if (hour === dayjs().hour()) {
//         textArea.addClass("present");
//     } else {
//         textArea.addClass("future");
//     }
// }());



function assignBackgroundColour() {
    const hourBlocks = $('.hour');  // select all blocks with class 'hour' to know the hour frame
    const currentTime = parseInt(dayjs().hour());  // get the current time in 24 hour format
    hourBlocks.each(function() {
        let rowHour = parseInt($(this).attr('id')); // extract their IDs
        if (rowHour < currentTime) {   // compare IDs to currentTime
            $(this).next().addClass('past');  // assign styling classes
        } else if (rowHour === currentTime) {
            $(this).next().addClass('present');
        } else if (rowHour > currentTime) {
            $(this).next().addClass('future');
        };
    });
};

// function to save to local storage when button is clicked
	// get the values
	// store them
    
    // function to update classes hours change
        // get current time
        // comptare against those in your time blocks
        // update the classes

    // remember to call your update function on page load
    // remember to also get values from local storage and set them on page load