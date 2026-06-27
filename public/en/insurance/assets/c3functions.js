// JavaScript Document

//Globals

$(document).ready( function() {
	//alert('Ready');
    $('div#c3_innercontainer nav ul li a').on('click', function(e) {
        $('div#c3_innercontainer nav ul li a').removeClass('selected');
        $(this).addClass('selected');
        $('div#c3_innercontainer section h3 strong').text($(this).text());
        if ($(this).text() != '2019') {
            $('.c3_sup_1').hide();
        } else {
            $('.c3_sup_1').show();
        }
        
        if ($(this).text() == '2024') {
            $('.c3_sup_2').hide();
        } else {
            $('.c3_sup_2').show();
        }
        c3analytics($(this), 'o', 'GIRS-MAP-2024-|-Tab-Clicked:' + $(this).text().replace(/\s+/g, '-'));
        e.preventDefault();
    });
    
    $('#c3_g_northamerica *').on('mouseover', function() {
        $('.c3_section_northamerica').addClass('hover');
    }).on('mouseout', function() {
        $('.c3_section_northamerica').removeClass('hover');
    });
    
    $('#c3_g_europe *').on('mouseover', function() {
        $('.c3_section_europe').addClass('hover');
    }).on('mouseout', function() {
        $('.c3_section_europe').removeClass('hover');
    });
    
     $('#c3_g_restoftheworld *').on('mouseover', function() {
        $('.c3_section_restoftheworld').addClass('hover');
    }).on('mouseout', function() {
        $('.c3_section_restoftheworld').removeClass('hover');
    });
    
    
    $('#c3_g_northamerica *').on('click', function(e) {
        if ($(window).width() < 1000) {
           $('html, body').animate({scrollTop: $('.c3_section_northamerica').offset().top});
        }
        e.preventDefault();
    });

    $('#c3_g_europe *').on('click', function(e) {
        if ($(window).width() < 1000) {
           $('html, body').animate({scrollTop: $('.c3_section_europe').offset().top});
        }
        e.preventDefault();
    });

    $('#c3_g_restoftheworld *').on('click', function(e) {
        if ($(window).width() < 1000) {
           $('html, body').animate({scrollTop: $('.c3_section_restoftheworld').offset().top});
        }
        e.preventDefault();
    });

    
    $('#c3_innercontainer li a').on('click', function(e) {
        
        var c3thisElement = $(this);
        
        if (c3thisElement.text() == '2019') {
            $('.c3_mapcontainer section span.c3_up').fadeOut();
        } else {
            $('.c3_mapcontainer section span.c3_up').fadeIn();
        }
        
        $('.c3_mapcontainer section h4').each( function() {
            var c3dataThisYear = $(this).attr('data-' + c3thisElement.text());
             //$(this).children('strong').text(c3dataThisYear); 
             var c3currentStat = parseInt($(this).children('strong').text());
            $(this).children('strong').prop('Counter',c3currentStat).animate({
                Counter: c3dataThisYear
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        
        $('.c3_mapcontainer section p').each( function() {
            var c3dataThisYear = $(this).attr('data-' + c3thisElement.text());
            // $(this).children('strong').text(c3dataThisYear);
            var c3currentStat = parseInt($(this).children('strong').text());
            
            if (c3dataThisYear == 0) {
                $(this).children('strong').text('n/a*');
            } else {
                $(this).children('strong').prop('Counter',c3currentStat).animate({
                    Counter: c3dataThisYear
                }, {
                    duration: 500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
        
        $('.c3_mapcontainer section span.c3_up').each( function() {
            var c3dataThisYear = $(this).attr('data-' + c3thisElement.text());
            if (c3dataThisYear == 0) {
                $(this).addClass('c3_zero');
                $(this).removeClass('c3_down');
            } else if (c3dataThisYear > 0) {
                $(this).removeClass('c3_zero');
                $(this).removeClass('c3_down');
            } else if (c3dataThisYear < 0) {
                $(this).removeClass('c3_zero');
                $(this).addClass('c3_down');
            }
             //$(this).text(c3dataThisYear);
            var c3currentStat = parseInt($(this).text());
            $(this).prop('Counter',c3currentStat).animate({
                Counter: c3dataThisYear
            }, {
                duration: 500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        
        e.preventDefault();
    });
    
    $('#c3_innercontainer li a.li_1').trigger('click');
    
});

function c3analytics(thisElement, sType, sName) {
    if (typeof OptanonActiveGroups !== 'undefined') {
        if (OptanonActiveGroups && OptanonActiveGroups.indexOf("2") !== -1) {
            if (typeof s !== 'undefined') {
                s.tl(thisElement, sType, sName);
            }
            console.log(thisElement, sType, sName);
        }
    }
    
}


