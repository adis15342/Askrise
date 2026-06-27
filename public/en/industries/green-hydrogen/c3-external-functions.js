	$(window).load( function() {
					
					$('#c3_container_target').append(sFromExternalJS);
					$('#c3_container_target').slideDown();
					$('div#c3_container a.c3_show_map_1').trigger('click');
					
				});
				
				var c3_Global_Data;
				var c3mapZoom = 100;
				
				$(document).ready( function() {
					c3addIncrementalValues();
					c3loadData();
					c3loadData2();
					$('div#c3_container div.c3_container_inner').c3attachDragger();
					
				});
				
				$('div#c3_container').on('click', 'a.c3_show_map_1', function(e) {
					c3heatMap(1);
					$(this).addClass('selected');
					$('a.c3_show_map_2').removeClass('selected');
					//$('div#c3_container_target_2').fadeOut();
					$('div#c3_container div.c3_div_label').hide();
					$('div.c3_slidecontainer form, div.c3_slidecontainer ul, div.c3_slidecontainer p.c3_map_1').slideDown();
					$('div.c3_slidecontainer p.c3_map_2').slideUp();
					$('p.c3_key_top, p.c3_key_bottom').show();
					$('.c3_legend').hide();
					
					c3analytics($(this), 'o', 'Hydrogen-Map-|-Map-Selected:' + $(this).text().replace(/\s+/g, '-'));
					
					e.preventDefault();
				});
				
				$('div#c3_container').on('click', 'a.c3_show_map_2', function(e) {
					c3heatMap2();
					//$('div#c3_container_target_2').fadeIn();
					$(this).addClass('selected');
					$('a.c3_show_map_1').removeClass('selected');
					$('div#c3_container div.c3_div_label').hide();
					$('div.c3_slidecontainer form, div.c3_slidecontainer ul, div.c3_slidecontainer p.c3_map_1').slideUp();
					$('div.c3_slidecontainer p.c3_map_2').slideDown();
					$('p.c3_key_top, p.c3_key_bottom').hide();
					$('.c3_legend').show();
					
					c3analytics($(this), 'o', 'Hydrogen-Map-|-Map-Selected:' + $(this).text().replace(/\s+/g, '-'));
					
					e.preventDefault();
				});
				
				$('div#c3_container').on('click', 'div.c3_div_label', function(e) {
					$('div#c3_container div.c3_div_label').hide();
				});
				
				
				
				$('div#c3_container').on('click', 'a.a_zoomin', function(e) {
					c3mapZoom = (c3mapZoom * 1.5);
					var c3nVisibleWidth = $('div#c3_container_target').outerWidth(true);
					var c3nMapCurrentWidth = $('svg#lands_4C').outerWidth(true);
					var c3nMapTargetWidth = c3nMapCurrentWidth * 1.5;
					var c3nBaseScrollLeft = (c3nMapTargetWidth - c3nVisibleWidth) / 2;
					
					var c3nVisibleHeight = $('div#c3_container_target').outerHeight(true);
					var c3nMapCurrentHeight = $('svg#lands_4C').outerHeight(true);
					var c3nMapTargetHeight = c3nMapCurrentHeight * 1.5;
					var c3nBaseScrollTop = (c3nMapTargetHeight - c3nVisibleHeight) / 2;
					
					var c3nCurrentScrollLeft = $('div#c3_container_target').scrollLeft();
					var c3nCurrentScrollTop = $('div#c3_container_target').scrollTop();
					
					var c3nScrollLeftModifier = c3nCurrentScrollLeft + ((c3nMapTargetWidth - c3nMapCurrentWidth) / 2);
					var c3nScrollTopModifier = 	c3nCurrentScrollTop + ((c3nMapTargetHeight - c3nMapCurrentHeight) / 2);
					
					$('svg#lands_4C, svg#lands_4C_2').animate({'width' : c3mapZoom + '%'}, 500);
					$('div#c3_container_target, div#c3_container_target_2').animate({scrollLeft: c3nScrollLeftModifier, scrollTop: c3nScrollTopModifier}, 500);
					$('div#c3_container div.c3_div_label').hide();
					e.preventDefault();
				});
				
				$('div#c3_container').on('click', 'a.a_zoomout', function(e) {
					if (c3mapZoom < 101) {
						c3mapZoom = 100;
					} else {
						c3mapZoom = (c3mapZoom / 1.5);
					}
					
					var c3nVisibleWidth = $('div#c3_container_target').outerWidth(true);
					var c3nMapCurrentWidth = $('svg#lands_4C').outerWidth(true);
					var c3nMapTargetWidth = c3nMapCurrentWidth / 1.5;
					var c3nBaseScrollLeft = (c3nMapTargetWidth - c3nVisibleWidth) / 2;
					
					var c3nVisibleHeight = $('div#c3_container_target').outerHeight(true);
					var c3nMapCurrentHeight = $('svg#lands_4C').outerHeight(true);
					var c3nMapTargetHeight = c3nMapCurrentHeight / 1.5;
					var c3nBaseScrollTop = (c3nMapTargetHeight - c3nVisibleHeight) / 2;
					
					var c3nCurrentScrollLeft = $('div#c3_container_target').scrollLeft();
					var c3nCurrentScrollTop = $('div#c3_container_target').scrollTop();
					
					var c3nScrollLeftModifier = c3nCurrentScrollLeft + ((c3nMapTargetWidth - c3nMapCurrentWidth) / 2);
					var c3nScrollTopModifier = 	c3nCurrentScrollTop + ((c3nMapTargetHeight - c3nMapCurrentHeight) / 2);
					
					$('svg#lands_4C, svg#lands_4C_2').animate({'width' : c3mapZoom + '%'}, 500);
					$('div#c3_container_target, div#c3_container_target_2').animate({scrollLeft: c3nScrollLeftModifier, scrollTop: c3nScrollTopModifier}, 500);
					$('div#c3_container div.c3_div_label').hide();
					e.preventDefault();
				});
				
				$('div#c3_container').on('change', '#c3_Range', function(e) {
					c3heatMap($(this).val());
					$('div#c3_container div.c3_div_label').hide();
					e.preventDefault();
				});
				
				$('div#c3_container div.c3_map_container #c3_map_key p.c3_legend a').click( function(e) {
					if ($(this).parent().hasClass('selected')) {
						$(this).parent().removeClass('selected')
					} else {
						$(this).parent().addClass('selected');
					}
					e.preventDefault();
				});
				
				$('div#c3_container').append('<div class="c3_div_label" style="display: none;"></div>');
				$('div#c3_container').on('click', '.c3Country', function(e) {
					//var c3nThisCost = parseFloat($(this).attr('data-thiscost'));
					//console.log('Parse Floated number: ' + c3nThisCost);
					$('div#c3_container div.c3_div_label').text($(this).attr('data-thiscost')).css({'top' : e.pageY - ($('#c3_container').offset().top + 70) + 'px', 'left' : e.pageX - 70 + 'px' }).show();
					
					
					c3analytics($(this), 'o', 'Hydrogen-Map-|-Country-Selected:' + $(this).attr('data-thiscost').replace(/\s+/g, '-'));
					//alert($(this).attr('data-thiscost'));
					e.preventDefault();
				});
				
				$('div#c3_container').on('change', 'select#c3_select_region', function(e) {
					if ($(this).val() != '0') {
						c3updateData($(this).val(), 'master');
						c3analytics($(this), 'o', 'Hydrogen-Map-|-Region-Selected:' + $(this).children(':selected').text().replace(/\s+/g, '-'));
					}
					e.preventDefault();
				});
				
				$('div#c3_container div.c3_container_inner').scroll( function() {
					$('div#c3_container div.c3_div_label').hide();
				});
				
				
				function c3heatMap(nYear) {
					var c3fill = '#7d7d7d';
					var c3yearStat;
					var c3upperStat;
					var c3lowerStat;
					var c3sRange = '';
					for (var i = c3_Global_Data.length - 1; i >= 0; i--) {
						
						c3fill = '#ffffff';
						c3yearStat = Math.round(c3_Global_Data[i][nYear] * 100) / 100;
						c3upperStat = (Math.ceil(c3yearStat * 4) / 4).toFixed(2);
						c3lowerStat = (Math.floor(c3yearStat * 4) / 4).toFixed(2);
						c3sRange = c3lowerStat + '-' + c3upperStat;
						
						if (c3upperStat == c3lowerStat) {
							c3sRange = c3upperStat + '-' + (Math.round(c3upperStat * 100) / 100 + .25);
						}
						
						console.log(c3yearStat);
						
						
						if (c3yearStat > 0 && c3yearStat < 0.25) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 0.24 && c3yearStat < 0.50) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 0.49 && c3yearStat < 0.75) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 0.74 && c3yearStat < 1) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 0.99 && c3yearStat < 1.25) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 1.24 && c3yearStat < 1.50) {
							c3fill = '#4EB523';
						} else if (c3yearStat > 1.49 && c3yearStat < 1.75) {
							c3fill = '#86DB4F';
						} else if (c3yearStat > 1.74 && c3yearStat < 2) {
							c3fill = '#C4FC9F';
						} else if (c3yearStat > 1.99 && c3yearStat < 2.25) {
							c3fill = '#FFECBD';
						} else if (c3yearStat > 2.24 && c3yearStat < 2.50) {
							c3fill = '#FFC83D';
						} else if (c3yearStat > 2.49 && c3yearStat < 2.75) {
							c3fill = '#FFB600';
						} else if (c3yearStat > 2.74 && c3yearStat < 3) {
							c3fill = '#C28A00';
						} else if (c3yearStat > 2.99 && c3yearStat < 3.25) {
							c3fill = '#FFDCA9';
						} else if (c3yearStat > 3.24 && c3yearStat < 3.50) {
							c3fill = '#FFA929';
						} else if (c3yearStat > 3.49 && c3yearStat < 3.75) {
							c3fill = '#EB8C00';
						} else if (c3yearStat > 3.74 && c3yearStat < 4) {
							c3fill = '#AE6800';
						} else if (c3yearStat > 3.99 && c3yearStat < 4.25) {
							c3fill = '#FEB791';
						} else if (c3yearStat > 4.24 && c3yearStat < 4.50) {
							c3fill = '#FD6412';
						} else if (c3yearStat > 4.49 && c3yearStat < 4.75) {
							c3fill = '#D04A02';
						} else if (c3yearStat > 4.74 && c3yearStat < 5) {
							c3fill = '#933401';
						} else if (c3yearStat > 4.99 && c3yearStat < 5.25) {
							c3fill = '#F1BAC3';
						} else if (c3yearStat > 5.24 && c3yearStat < 5.50) {
							c3fill = '#E27588';
						} else if (c3yearStat > 5.49 && c3yearStat < 5.75) {
							c3fill = '#DB536A';
						} else if (c3yearStat > 5.74 && c3yearStat < 6) {
							c3fill = '#A43E50';
						} else if (c3yearStat > 5.99 && c3yearStat < 6.25) {
							c3fill = '#F7C8C4';
						} else if (c3yearStat > 6.24 && c3yearStat < 6.50) {
							c3fill = '#E86153';
						} else if (c3yearStat > 6.49 && c3yearStat < 6.75) {
							c3fill = '#E0301E';
						} else if (c3yearStat > 6.74 && c3yearStat < 7) {
							c3fill = '#AA2417';
						} else if (c3yearStat > 6.99 && c3yearStat < 7.25) {
							c3fill = '#DEB8FF';
						} else if (c3yearStat > 7.24 && c3yearStat < 7.50) {
							c3fill = '#B15AFE';
						} else if (c3yearStat > 7.49 && c3yearStat < 7.75) {
							c3fill = '#9013FE';
						} else if (c3yearStat > 7.74 && c3yearStat < 8) {
							c3fill = '#6A1CE2';
						}
						
						
						//alert(c3_Global_Data[i][0]);
						//alert('#' + c3_Global_Data[i][0].toLowerCase().replace(/ /g,"_") + '_1_');
						/*if ($('svg#lands_4C').find('#' + c3_Global_Data[i][0].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\'`~()]/g,"").replace(/ /g,"_") + '_1_').length > 0) {
							//alert('Found :' + c3_Global_Data[i][0]);
						} else {
							alert('NOT Found :' + c3_Global_Data[i][0] + ' | ' + '#' + c3_Global_Data[i][0].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\'`~()]/g,"").replace(/ /g,"_") + '_1_');
							
						}*/
						$('svg#lands_4C').find('#' + c3_Global_Data[i][0].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\'`~()]/g,"").replace(/ /g,"_") + '_1_').css({'fill' : c3fill, 'cursor' : 'pointer'}).addClass('c3Country').attr('data-thiscost', c3_Global_Data[i][0] + ': ' + c3sRange + $('p.c3_key_bottom').text().replace('0',''));
						
						
					}
				}
				
				function c3heatMap2() {
					
					$('svg#lands_4C .c3Country').css({'fill' : '#7d7d7d'}).removeClass('c3Country');
					
					var c3fill;
					
					for (var i = c3_Global_Data_2.length - 1; i >= 0; i--) {
						
						c3fill = '#ffffff';
						c3yearStat = c3_Global_Data_2[i][1];
						
						console.log(c3yearStat);
						
						
						if (c3yearStat > 0 && c3yearStat < 1.142) {
							c3fill = '#2C8646';
						} else if (c3yearStat > 1.141 && c3yearStat < 1.284) {
							c3fill = '#4EB523';
						} else if (c3yearStat > 1.283 && c3yearStat < 1.426) {
							c3fill = '#86DB4F';
						} else if (c3yearStat > 1.425 && c3yearStat < 1.568) {
							c3fill = '#FFECBD';
						} else if (c3yearStat > 1.567 && c3yearStat < 1.710) {
							c3fill = '#FFECBD';
						} else if (c3yearStat > 1.709 && c3yearStat < 1.852) {
							c3fill = '#FFC83D';
						} else if (c3yearStat > 1.851 && c3yearStat < 1.994) {
							c3fill = '#FFB600';
						} else if (c3yearStat > 1.993 && c3yearStat < 2.136) {
							c3fill = '#C28A00';
						} else if (c3yearStat > 2.135 && c3yearStat < 2.278) {
							c3fill = '#FFDCA9';
						} else if (c3yearStat > 2.277 && c3yearStat < 2.420) {
							c3fill = '#FFA929';
						} else if (c3yearStat > 2.419 && c3yearStat < 2.562) {
							c3fill = '#EB8C00';
						} else if (c3yearStat > 2.561 && c3yearStat < 2.704) {
							c3fill = '#AE6800';
						} else if (c3yearStat > 2.703 && c3yearStat < 2.846) {
							c3fill = '#FEB791';
						} else if (c3yearStat > 2.845 && c3yearStat < 2.988) {
							c3fill = '#FD6412';
						} else if (c3yearStat > 2.987 && c3yearStat < 3.130) {
							c3fill = '#D04A02';
						} else if (c3yearStat > 3.129 && c3yearStat < 3.272) {
							c3fill = '#933401';
						} else if (c3yearStat > 3.271 && c3yearStat < 3.414) {
							c3fill = '#F1BAC3';
						} else if (c3yearStat > 3.413 && c3yearStat < 3.556) {
							c3fill = '#E27588';
						} else if (c3yearStat > 3.555 && c3yearStat < 3.698) {
							c3fill = '#DB536A';
						} else if (c3yearStat > 3.697 && c3yearStat < 3.840) {
							c3fill = '#A43E50';
						} else if (c3yearStat > 3.839 && c3yearStat < 3.982) {
							c3fill = '#F7C8C4';
						} else if (c3yearStat > 3.981 && c3yearStat < 4.124) {
							c3fill = '#E86153';
						} else if (c3yearStat > 4.123 && c3yearStat < 4.266) {
							c3fill = '#E0301E';
						} else if (c3yearStat > 4.265 && c3yearStat < 4.408) {
							c3fill = '#AA2417';
						} else if (c3yearStat > 4.407 && c3yearStat < 4.550) {
							c3fill = '#DEB8FF';
						} else if (c3yearStat > 4.549 && c3yearStat < 4.629) {
							c3fill = '#B15AFE';
						} else if (c3yearStat > 4.628 && c3yearStat < 4.834) {
							c3fill = '#9013FE';
						} else if (c3yearStat > 4.833 && c3yearStat < 5.5) {
							c3fill = '#6A1CE2';
						} 
						
						var c3orientated;
						
						if (Math.round(c3yearStat) == 1) {
							c3orientated = 'Strongly export-oriented'
						} else if (Math.round(c3yearStat) == 2) {
							c3orientated = 'Slightly export-oriented'
						} else if (Math.round(c3yearStat) == 3) {
							c3orientated = 'Neutral'
						} else if (Math.round(c3yearStat) == 4) {
							c3orientated = 'Slightly import-oriented'
						} else if (Math.round(c3yearStat) == 5) {
							c3orientated = 'Strongly import-oriented'
						}
						
					
						$('svg#lands_4C').find('#' + c3_Global_Data_2[i][0].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\'`~()]/g,"").replace(/ /g,"_") + '_1_').css({'fill' : c3fill, 'cursor' : 'pointer'}).addClass('c3Country').attr('data-thiscost', c3_Global_Data_2[i][0] + ': ' + c3orientated);
					}
				}
				
				function c3analytics(thisElement, sType, sName) {
					if (typeof s !== 'undefined') {
						s.tl(thisElement, sType, sName);
					}
				}
				
				function c3loadData() {
					// Create new array to hold the extracted data
					var aData = [];
					var $thisTarget = $('#c3_container_target');
					var $thisAnswerTarget;
					var nLoopCount = 1;
					// Add the control panels
					/*$thisTarget.append('<article class="c3_article_control_panel">' +
											'<form>' +
												'<label for="c3_select_region">Select a jurisdiction</label>' +
												'<select id="c3_select_region" class="c3_select">' +
													'<option value="0">No region selected</option>' +
												'</select>' +
											'</form>' +
				   						'</article>');*/
					// Iterate over the data tables and find data to add to the arrays
					$('table.c3_table_data').each( function(i) {
						// Start by iterating the rows
						$(this).find('tr').each( function(ii) {
							// Push an empty array on for each row
							aData.push([]);
							// Log the target ID for this row
							var c3sThisRowID = $(this).attr('id');
							// Then iterate the cells
							$(this).children('th, td').each( function(iii) {
								// Update the global data array with the values for this answer
								aData[ii].push($(this).text());
							});	
						});
					});
					// Loop over the array to remove the empties
					for (var i = aData.length - 1; i >= 0; i--) {
						if (aData[i].length == 0) {
							aData.splice(i, 1);
						}
					}
					c3_Global_Data = aData;
					console.log(c3_Global_Data);
					
					
				}
				
				function c3loadData2() {
					// Create new array to hold the extracted data
					var aData = [];
					var $thisTarget = $('#c3_container_target_2');
					var $thisAnswerTarget;
					var nLoopCount = 1;
					// Add the control panels
					/*$thisTarget.append('<article class="c3_article_control_panel">' +
											'<form>' +
												'<label for="c3_select_region">Select a jurisdiction</label>' +
												'<select id="c3_select_region" class="c3_select">' +
													'<option value="0">No region selected</option>' +
												'</select>' +
											'</form>' +
				   						'</article>');*/
					// Iterate over the data tables and find data to add to the arrays
					$('table.c3_table_data_2').each( function(i) {
						// Start by iterating the rows
						$(this).find('tr').each( function(ii) {
							// Push an empty array on for each row
							aData.push([]);
							// Log the target ID for this row
							var c3sThisRowID = $(this).attr('id');
							// Then iterate the cells
							$(this).children('th, td').each( function(iii) {
								// Update the global data array with the values for this answer
								aData[ii].push($(this).text());
							});	
						});
					});
					// Loop over the array to remove the empties
					for (var i = aData.length - 1; i >= 0; i--) {
						if (aData[i].length == 0) {
							aData.splice(i, 1);
						}
					}
					c3_Global_Data_2 = aData;
					console.log(c3_Global_Data_2);
					
					
				}
				
				function c3addIncrementalValues() {
					var c3nThisDecade = 2020;
					var c3nThisValue = 0;
					var c3nNextValue = 0;
					var c3nIncrementalValue = 0;
					// Iterate over the data tables
					$('table.c3_table_data').each( function(i) {
						// Start by iterating the rows
						$(this).find('tr').each( function(ii) {
							/// Then iterate the cells
							$(this).children('th, td').not('c3_tr_incremental').each( function(iii) {
								// Check that we're in a data cell and not a country name
								if (iii > 0 && $(this).next().length > 0) {
									c3nThisValue = parseFloat($(this).text());
									c3nNextValue = parseFloat($(this).next().text());
									for (var iiii = 9; iiii > 0; iiii--) {
										if (ii == 0) {
											c3nThisDecade = parseInt($(this).text()) + iiii;
											$(this).after('<th scope="col" class="c3_tr_incremental">' + c3nThisDecade + '</th>');
										} else {
											c3nIncrementalValue = c3nThisValue - ((c3nThisValue - c3nNextValue) * (iiii / 10));
											$(this).after('<td class="c3_tr_incremental">' + c3nIncrementalValue.toFixed(4) + '</td>');
										}
									}
									
								}
							});	
						});
					});
				}
				
				$.fn.c3attachDragger = function(){
				var c3attachment = false, lastPosition, position, difference;
				$( $(this).selector ).on("mousedown mouseup mousemove",function(e){
					if( e.type == "mousedown" ) c3attachment = true, lastPosition = [e.clientX, e.clientY];
					if( e.type == "mouseup" ) c3attachment = false;
					if( e.type == "mousemove" && c3attachment == true ){
						position = [e.clientX, e.clientY];
						difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
						$(this).scrollLeft( $(this).scrollLeft() - difference[0] );
						$(this).scrollTop( $(this).scrollTop() - difference[1] );
						lastPosition = [e.clientX, e.clientY];
					}
				});
					
				$(window).on("mouseup", function(){
					c3attachment = false;
				});
			}