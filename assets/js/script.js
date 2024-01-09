//Display when a user opens the planner.

$(function() {

    const date = dayjs().format('dddd, D MMM YYYY');
    console.log(date);
    $("#currentDay").text(date);

    assignBackgroundColour()

    getLocalStorage()

});

// Update the hour constantly

function checkTime() {

    const timer = setInterval(() => {
        assignColors;
    }, 1000);
}


// Assign backgound coulour

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

// Function to save to local storage when button is clicked

$('.saveBtn').on('click', function() {

    const timeBlock = $(this).closest('.time-block'); // Find the closest time-block element
    const timeBlockId = timeBlock.attr('id'); // Extract the time block's ID
    //  alert(timeBlockId)
    const textArea = timeBlock.find('.eventEnter');// Find the textarea within the time block
    const eventText = textArea.val(); // Get the value of the textarea
    localStorage.setItem(timeBlockId, JSON.stringify(eventText)); // Save the event to local storage
});


// Get the previous local storage
const userInput = $('textarea')

function getLocalStorage(){
    let timeBlock = $('.time-block')
    timeBlock.each(function(){
        if(localStorage.getItem($(this).attr('id')) != 'undefined'){
            $(this).find($('textarea')).val(localStorage.getItem($(this).attr('id')))
        } 
    })}