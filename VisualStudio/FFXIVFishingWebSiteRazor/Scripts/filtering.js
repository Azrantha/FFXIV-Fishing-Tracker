//all filtering methods need to be called on page load to ensure filtering is done correctly if the page is refreshed.
$(document).ready(function () {
    //select rows where the fish has been caught, and add the caught class - this is to ensure the class is applied correctly after a refresh.
    var caughtRows = $(".fishRow").filter(function () {
        return $(this).children().children(".fishRowCaught")[0].checked;
    })
    caughtRows.addClass("caught");

    filter();
    hideCaught();
});

$("#selectPatch").change(filter); // filter by patch when patch selection box changed
$("#hideCaughtToggle").change(hideCaught); //hide all caught fish if this is toggled on, or show them if toggled off and they are not filtered.

$(".fishRowCaught").change(function () {
    var choice = $("#hideCaughtToggle")[0].checked;
    if (choice) {
        //if the hide taught toggle is currently checked, then this row must not have previously been checked (as it was visible)
        //therefore, this row should now be marked as both caught and hidden. This is faster than executing the hideCaught function.
        $(this).parents(".fishRow").addClass("caught").addClass("hidden");
    } else {
        //Otherwise, toggle the caught class on the parent.
        $(this).parents(".fishRow").toggleClass("caught")
    }
});

/*
 * Depending on the choice in the selectPatch drop down, display all fish, or add/remvoe the class Filtered to the hidden fish.
 */
function filter() {
    var choice = $("#selectPatch")[0].value;
    var rows = $(".fishRow");
    if (choice == "none") {
        rows.removeClass("filtered");
        return;
    }
    var showRows = rows.filter(function () {
        return (parseInt(choice) == parseInt($(this).attr("patch")));
    });
    showRows.removeClass("filtered");
    var hideRows = rows.filter(function () {
        return (parseInt(choice) != parseInt($(this).attr("patch")));
    });
    hideRows.addClass("filtered");
}

/*
 * Depending on whether the hideCaughtToggle is checked, either add or remove the hidden class from caught rows.
 */
function hideCaught() {
    var choice = $("#hideCaughtToggle")[0].checked;
    var caughtRows = $(".caught")
    if (choice) {
        caughtRows.addClass("hidden");
    } else {
        caughtRows.removeClass("hidden");
    }
}