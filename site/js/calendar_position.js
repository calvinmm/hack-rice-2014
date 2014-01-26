(function() {
    // calendar_position.js
    // doesn't do anything useful yet

    var course_info = $("#file-list").children().first().text().trim();
    var arr = course_info.split(" ");

    calendar_positioning(arr);
})();

function calendar_positioning(arr) {
    var url = "http://ec2-54-201-138-192.us-west-2.compute.amazonaws.com:8080/ratings/";
    $.getJSON(url + arr[0] + "/" + arr[1] + "?callback=?", function(data) {
        var obj = data.courses[0];

        console.log(obj);
        var cal = $("#calendar-table");

        $(cal).find("#math-355").css({'width':'120px'});


    });
}