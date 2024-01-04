$(function () {
    // button click to save
    $(".saveBtn").on("click", function () {
        var textValue = $(this).parent().children().eq(1).val();
        var keyValue = $(this).parent().attr("id");
        localStorage.setItem(keyValue, textValue);
    });
    // Pulling old values from localStorage
    $(".time-block").each(function () {
        var accessKey = $(this).attr("id");
        var textPull = localStorage.getItem(accessKey);
        if (textPull != null) {
            $(this).children().eq(1).text(textPull);
        }
    });
    //setting class values based on current hour
    $(".time-block").each(function () {
        var hour = dayjs().format("HH");
        var unitID = parseInt($(this).attr("id"));
        if (unitID == hour) {
            $(this).removeClass("past future").addClass("present");
        } else if (unitID < hour) {
            $(this).removeClass("future present").addClass("past");
        } else {
            $(this).removeClass("present past").addClass("future");
        }
    });
    // set date on top of page
    var todayDate = dayjs().format("dddd, MMM DD, YYYY");
    $("#currentDay").text(todayDate);
});
