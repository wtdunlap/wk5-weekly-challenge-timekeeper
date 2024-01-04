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
});
