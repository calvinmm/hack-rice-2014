(function() {
    // populate.js
    // used to populate things

    var course_info = $("#file-list").children().first().text().trim();
    var arr = course_info.split(" ");

    fix_bottom_junk(arr);
    $("#footer").fadeIn();
})();

function fix_bottom_junk(arr) {
    var url = "http://ec2-54-201-138-192.us-west-2.compute.amazonaws.com:8080/ratings/";
    $.getJSON(url + arr[0] + "/" + arr[1] + "?callback=?", function(data) {
        var obj = data.courses[0];

        console.log(obj);
        var course_div = $("#course-info-bottom");

        $(course_div).find("h4").text(obj.dept + " " + obj.number.toString());
        $(course_div).find("#prof-name").text(obj.teacher);
        $(course_div).find("#crn").text(obj.crn);
        $(course_div).find("#meeting-times").text(obj.time);


        var grade_array = obj.grades.split(",").map(function(x){return parseInt(x)});

        $(course_div).parent().fadeIn();

        drawChart(grade_array);

        var workload_array = obj.workload.split(",").map(function(x){return parseInt(x)});
        var total_workload = 0;
        for (var i = 0; i < workload_array.length; i++) {
            total_workload += workload_array[i];
        }
        var workload_array_p = workload_array.map(function(x){return x/total_workload});
        draw_1(workload_array_p);

        var rating_array = obj.rating.split(",").map(function(x){return parseInt(x)});
        var total_rating = 0;
        for (var i = 0; i < rating_array.length; i++) {
            total_rating += rating_array[i];
        }
        var rating_array_p = rating_array.map(function(x){return x/total_rating});
        draw_2(rating_array_p);


    });
}

function ensure_listen() {
    $("#file-list .list-group-item").click(function() {

        $(".list-group-item").removeAttr("id");
        $(this).attr("id", "current");

        var course_info = $(this).text().trim();
        var arr = course_info.split(" ");

        fix_bottom_junk(arr);
    });
}

ensure_listen();

function possible () {
    $("#possible-class .list-group-item").each(function (i,j) {
        if ($(j).css("background-color") == "rgb(240, 248, 255)") {
            $(j).attr("id", "selected");

            add_class_list($(j).attr("dept") + " " + $(j).attr("number"));
        }
    });
}

function add_class_list (name) {

    var temp = $("<li>").attr({
        class: "list-group-item"
    }).text(name).append($("<span>").attr({
        class: "glyphicon glyphicon-remove pull-right"
    }));

    $("#file-list").append(temp);
    ensure_listen();
}