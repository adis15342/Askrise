// JavaScript Document
var c3aData;

$(window).on('load', function() {
   
});

$(document).ready( function() {
	
    //alert('ready');
    
    $('div.c3_question a.c3_option').on('click', function() {
    if ($(this).parent().parent().hasClass('c3_active')) {
        $(this).toggleClass('c3_selected');
    }
        return false;
    });
    
    $('form.c3_form select').on('change', function() {
        //c3UpadateResultContact();
        // Check if EU country selected
         if ($(this).val() > 1) {
             $('div.c3_company_q1_1').addClass('c3_active');
             $('div.c3_eu_q1_1').removeClass('c3_active');
             
             $('div.c3_question_eu').addClass('c3_mobile_hide');
             $('div.c3_question_company').removeClass('c3_mobile_hide');
             
         } else {
             $('div.c3_company_q1_1').removeClass('c3_active');
             $('div.c3_eu_q1_1').addClass('c3_active');
             
             $('div.c3_question_eu').removeClass('c3_mobile_hide');
             $('div.c3_question_company').addClass('c3_mobile_hide');
         }
        
        $('div.c3_row').not($('div.c3_row_1')).slideUp().removeClass('c3_show_lines');
        $('div.c3_row_1').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
       }).addClass('c3_show_lines');
    });
    
    $('form.c3_form_contact_1 select, form.c3_form_contact_2 select').on('change', function() {
        c3UpadateResultContact($(this));
        $('form.c3_form_contact select').val($(this).val());
    });
    
    
    
    // EU LOGIC STARTS HERE //
    
    
    $('div.c3_eu_q1_1 a.c3_yes').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_4').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_2, div.c3_row_3, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_hide_after');
        $('div.c3_result_1').removeClass('c3_hide_before');
        $('div.c3_question_company').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_eu_q1_1 a.c3_no').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_2').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_3, div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_company').removeClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_hide_after');
        $('div.c3_result_2').removeClass('c3_hide_before');
        $('div.c3_eu_q2_1').addClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_eu_q2_1 a.c3_no').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_5').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_3, div.c3_row_4').slideUp().removeClass('c3_show_lines');
        $('div.c3_eu_q1_1').addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_hide_after');
        $('div.c3_result_1').removeClass('c3_hide_before');
        $('div.c3_question_company').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_eu_q2_1 a.c3_yes').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_3').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_company').removeClass('c3_active');
        $('div.c3_eu_q1_1').addClass('c3_active');
        $('div.c3_eu_q2_1').addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_hide_after');
        $('div.c3_result_2').removeClass('c3_hide_before');
        $('div.c3_eu_q3_1').addClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_eu_q3_1 a.c3_yes').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_4').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_eu_q1_1').addClass('c3_active');
        $('div.c3_eu_q2_1').addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_hide_after');
        $('div.c3_result_1').removeClass('c3_hide_before');
        $('div.c3_question_company').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_eu_q3_1 a.c3_no').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_5').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_4').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_company').removeClass('c3_active');
        $('div.c3_eu_q1_1').addClass('c3_active');
        $('div.c3_eu_q2_1').addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_hide_after');
        $('div.c3_result_2').removeClass('c3_hide_before');
        $('div.c3_eu_q3_1').addClass('c3_active');
        $(this).parent().addClass('c3_active');
    }
        return false;
    });
    
    // COMPANY LOGIC STARTS HERE //
    
    $('div.c3_company_q1_1 a.c3_yes').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_2').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_3, div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        $('div.c3_company_q2_1').addClass('c3_active');
        $('div.c3_company_q2_2').removeClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_company_q1_1 a.c3_no').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_2').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_3, div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        $('div.c3_company_q2_2').addClass('c3_active');
        $('div.c3_company_q2_1').removeClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_company_q2_1 a.c3_option').on('click', function() {
    if ($(this).parent().parent().hasClass('c3_active')) {
        $('div.c3_row_3, div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $('div.c3_company_q1_1').addClass('c3_active');
        $('div.c3_company_q2_1').addClass('c3_active');
        $('div.c3_company_q2_2').removeClass('c3_active');
    }
        return false;
    });
    
    $('div.c3_company_q2_2 a.c3_option').on('click', function() {
    if ($(this).parent().parent().hasClass('c3_active')) {
        $('div.c3_row_3, div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $('div.c3_company_q1_1').addClass('c3_active');
        $('div.c3_company_q2_2').addClass('c3_active');
        $('div.c3_company_q2_1').removeClass('c3_active');
    }
        return false;
    });
    
    
    $('div.c3_company_q2_1 a.c3_done').on('click', function() {
    if ($(this).parent().parent().hasClass('c3_active')) {
        if ($(this).parent().find($('.c3_selected')).length < 2) {
            $('div.c3_row_5').slideDown({
                start: function () {
                    $(this).css({
                    display: "flex"
                });
              }
            }).addClass('c3_show_lines');
            $('div.c3_row_3, div.c3_row_4').slideUp().removeClass('c3_show_lines');
        } else {
            $('div.c3_row_3').slideDown({
                start: function () {
                    $(this).css({
                    display: "flex"
                });
              }
            }).addClass('c3_show_lines');
            $('div.c3_company_q3_1').addClass('c3_active');
            $('div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        }
        
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        $('div.c3_company_q1_1').addClass('c3_active');
        $('div.c3_company_q2_1').addClass('c3_active');
        $('div.c3_company_q2_2').removeClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_hide_before');
        $('div.c3_result_2').removeClass('c3_hide_after');
        // this moves the dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_after_left');
        $('div.c3_result_2').removeClass('c3_after_right');
        
        $('div.c3_company_q3_1').addClass('c3_suppress_after');
        $('div.c3_company_q3_1').removeClass('c3_suppress_before');
    }
        return false;
    });
    
    $('div.c3_company_q2_2 a.c3_done').on('click', function() {
    if ($(this).parent().parent().hasClass('c3_active')) {
        if ($(this).parent().find($('.c3_selected')).length > 1) {
            $('div.c3_row_4').slideDown({
                start: function () {
                    $(this).css({
                    display: "flex"
                });
              }
            }).addClass('c3_show_lines');
            $('div.c3_row_3, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        } else {
            $('div.c3_row_3').slideDown({
                start: function () {
                    $(this).css({
                    display: "flex"
                });
              }
            }).addClass('c3_show_lines');
            $('div.c3_company_q3_1').addClass('c3_active');
            $('div.c3_row_4, div.c3_row_5').slideUp().removeClass('c3_show_lines');
        }
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        $('div.c3_company_q1_1').addClass('c3_active');
        $('div.c3_company_q2_2').addClass('c3_active');
        $('div.c3_company_q2_1').removeClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_hide_before');
        $('div.c3_result_1').removeClass('c3_hide_after');
        // this moves the dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_after_right');
        $('div.c3_result_1').removeClass('c3_after_left');
        
        $('div.c3_company_q3_1').addClass('c3_suppress_before');
        $('div.c3_company_q3_1').removeClass('c3_suppress_after');
    }
        return false;
    });
    
    $('div.c3_company_q3_1 a.c3_yes').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_4').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_5').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        $('div.c3_company_q1_1').addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_1').addClass('c3_hide_before');
        $('div.c3_result_1').removeClass('c3_hide_after');
        // this moves the dotted line to the correct answer
        $('div.c3_result_1').removeClass('c3_after_left');
        $('div.c3_result_1').removeClass('c3_after_right');
    }
        return false;
    });
    
    $('div.c3_company_q3_1 a.c3_no').on('click', function() {
    if ($(this).parent().hasClass('c3_active')) {
       $('div.c3_row_5').slideDown({
            start: function () {
                $(this).css({
                display: "flex"
            });
          }
        }).addClass('c3_show_lines');
        $('div.c3_row_4').slideUp().removeClass('c3_show_lines');
        $('div.c3_question_eu').removeClass('c3_active');
        $(this).parent().addClass('c3_active');
        // this shows the correct dotted line to the correct answer
        $('div.c3_result_2').addClass('c3_hide_before');
        $('div.c3_result_2').addClass('c3_after_right');
        $('div.c3_result_2').removeClass('c3_hide_after');
        $('div.c3_result_2').removeClass('c3_after_left');
        // this moves the dotted line to the correct answer
        $('div.c3_result_1').removeClass('c3_after_left');
        $('div.c3_result_1').removeClass('c3_after_right');
    }
        return false;
    });
    
    
   c3aData = c3loadData();
    
});

// ------ DATA LOADER ------- //

function c3loadData() {
	// Create new array to hold the extracted data
	var aData = [];
	// Start by iterating the rows
	$('table.c3_table_data tbody tr').each( function(i) {
		/// Push an empty array on for each row
		aData.push([]);
		// Then iterate the cells
		$(this).children('th, td').not('.th_c3_hide').each( function(ii) {
			// Update the global data array with the values for this answer
			aData[i].push($(this).text());
		});
	});
    
    
	// Loop over the array (and it's inners) to remove the empties
	for (var i = aData.length - 1; i >= 0; i--) {
		for (var ii = aData[i].length - 1; ii >= 0; ii--) {
			if (aData[i][ii].length == 0) {
				aData[i].splice(ii, 1);
			}
		}
	}
	
	console.log(aData);
	
	return(aData);

}

function c3UpadateResultContact(c3thisElement) {
    var c3nContact = parseInt(c3thisElement.val()) - 1;
    $('.c3_name').text(c3aData[c3nContact][1] + ' ' + c3aData[c3nContact][2]);
    $('.c3_title').text(c3aData[c3nContact][3]);
    $('.c3_tel').html('<b>Tel:</b>' + c3aData[c3nContact][4]);
    $('.c3_email a').attr('href', 'mailto:' + c3aData[c3nContact][6]);
    $('.c3_contact_intro').text(c3aData[c3nContact][8]);
    $('.c3_contact_image img').attr('src', c3aData[c3nContact][7]);
    $('.c3_linkedin').html('<a target="_blank" href="' + c3aData[c3nContact][9] + '"><b>See Linked In</b></a>');
    
    if ($(window).width() > 767) {
        
        $('div.c3_contact').slideDown({
            start: function () { 
                $(this).css({
                display: "flex"
            });
          }
        });
        
    } else {
    
        $('div.c3_contact').slideDown({
            start: function () {
                $(this).css({
                display: "block"
            });
          }
        });
}   
    console.log(c3aData[c3nContact]);
}
