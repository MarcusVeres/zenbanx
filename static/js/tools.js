var global_data_var = "this should get overwritten";

// function to calculate local time
// in a different city
// given the city's UTC offset
function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time in " + city + " is " + nd.toLocaleString();

}

function ct( date )
{
    date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 );
    return date;
}

function cts( timestamp )
{
    // converts a timestamp to the toronto timezone
    var date = new Date( timestamp );
    return date.getTime() + date.getTimezoneOffset() * 60 * 1000;
}


// Debounce function

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

