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
        var times_dict = {8:"27px",9:"52px",10:"78px",11:"102px",12:"128px",1:"153px",2:"178px",3:"203px",4:"227px",5:["253px"],6:"278px",7:"303"};

        console.log(obj);
        var cal = $("#calendar-table");
        var col_len = $("#Monday").width();

        $(cal).find("#math-355").css({'width':col_len.toString() + 'px'});


    });
}