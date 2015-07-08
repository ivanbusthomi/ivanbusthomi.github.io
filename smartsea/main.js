// -------------------------
// Slider
// -------------------------
$('#lefttoggle').on('click', function() {		
    var panel = $('#slide-panel-left');
    if (panel.hasClass("visible")) {
        panel.removeClass('visible').animate({'margin-left':'-500px'});
    } else {
        panel.addClass('visible').animate({'margin-left':'0px'});
    }	
    return false;	
});

$('#layertoggle').on('click', function() {		
    var panel = $('#slide-panel-layer');
    if (panel.hasClass("visible")) {
        panel.removeClass('visible').animate({'margin-right':'-300px'});
    } else {
        panel.addClass('visible').animate({'margin-right':'0px'});
    }	
    return false;	
});

$('#querytoggle').on('click', function() {		
    var panel = $('#slide-panel-query');
    if (panel.hasClass("visible")) {
        panel.removeClass('visible').animate({'margin-right':'-300px'});
    } else {
        panel.addClass('visible').animate({'margin-right':'0px'});
    }	
    return false;	
});

// -------------------------
// Open Layer
// -------------------------