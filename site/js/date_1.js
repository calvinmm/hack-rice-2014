(function() {
    // date_1.js
}());

function determine_top(time) {
    var times = ['8a', '9a', '10a', '11a', '12p',
                 '1p', '2p', '3p', '4p', '5p', '6p', '7p'];
    var top = ["27px", "52px", "78px", "102px", 
               "128px", "153px", "178px", "203px",
               "227px", "253px", "278px", "303"];

    // var bottom = 26;
    // return (bottom + times.indexOf(time) * bottom).toString() + "px";
    return top[times.indexOf(time)];
}

function determine_left(day) {
    var days = ['M', 'T', 'W', 'TH', 'F'];
    var left = [21, 148, 276, 401, 528];

    return left[days.indexOf(day)].toString() + "px";
}

function add_class_calendar(day, time, name, id) {
    console.log(day, time);
    var top = determine_top(time);
    var left = determine_left(day);

    var d = $("<div>", {
        class: "class-element"
    }).css("top", top)
      .css("left", left)
      .text(name)
      .attr("id", id);

      // .css("background-color", "blue");

    $("#add-here").append(d);
}