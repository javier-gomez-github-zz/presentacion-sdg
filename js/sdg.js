// Navigation with arrow keys (up and down)
$(document).keydown(function (e) {
    if (e.key === 'ArrowUp') {
        // Previous
        $(".carousel-control-prev").click();
        return false;
    }
    if (e.key === 'ArrowDown') {
        // Next
        $(".carousel-control-next").click();
        return false;
    }
});