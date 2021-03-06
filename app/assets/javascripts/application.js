// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


  // var user_url = "";
  // var admin_url = "";


$(document).ready(function () {

  function getQuote(testers, numOfRegions, expLevel, testDuration){
    var finalAnswer  = 0
    var expertCost   = 1
    var regionCost   = 1
    var durationCost = 1

    if (expLevel == "Low"){
      expertCost = 1
    }else if (expLevel == "Medium") {
      expertCost = 2
    }else if (expLevel == "High") {
      expertCost = 4
    }

   if (numOfRegions == 1.5){
     regionCost = 1.5
   }else if (numOfRegions == 3) {
     regionCost = 3
   }else if (numOfRegions == 4) {
     regionCost = 4
   }else if (numOfRegions == 5) {
    regionCost = 5
   }

   if (testDuration == 2){
     regionCost    = 2
   }else if (testDuration == 4) {
     durationCost  = 7
   }else if (testDuration == 6) {
     durationCost  = 10
   }else if (testDuration == 7) {
    durationCost   = 12
   }


  finalAnswer = testers * 10 + ( ( expertCost + regionCost + durationCost) * testers  )
  return finalAnswer

  }
  $("#quote").click(function(){
    $("#cost").show();
    var number     = $("input[name='optradionum']:checked").val();
    var experience = $("input[name='optradioexp']:checked").val();
    var region     = $("input[name='optradioreg']:checked").val();
    var duration     = $("input[name='optradiodur']:checked").val();
    var finalQuote = getQuote(number, region, experience, duration)
     if(number && experience && region && duration){
        // $(".cost").html("<h1>"   + number     + "</h1>");
        // $(".cost").append("<h1>" + experience + "</h1>");
        // $(".cost").append("<h1>" + region     + "</h1>");
        $(".cost").html("<h1>" + "Total Cost GHC" +  + finalQuote  + "</h1>")
     } else {
       $(".cost").html("<h3>"   +"Please fill each option Some fields are empty"    + "</h3>");
     }
  })

  // $.ajax({
  //       url: 'https://stormy-refuge-52415.herokuapp.com/urls',
  //       dataType: 'json',
  //       cache: false,
  //       success: function (data) {
  //       user_url = data[data.length - 1]['user'];
  //       admin_url = data[data.length - 1]['admin'];
  //         $("#json").attr("target", "blank")
  //         $("#json").attr("href", user_url);
  //         $("#yep").append("<br />" + user_url)
  //       },
  //       error: function(xhr, status, err) {
  //         $("#json").hide();
  //         // $("#yep").append(err);
  //      }
  // });


  // $('#btn_create_a_test').click(function(){
  //   window.location.href = 'http://localhost:8080/#/builder';
  //   return false;
  // });

  // $('#btn_view_test_progress').click(function(){
  //   //Get whith Authentication
  //   var admin_token = admin_url.substr(-32);
  //   var formId = admin_token.substr(0,16);
  //   var original_get_url = "https://formbuildertry.herokuapp.com/v1/buckets/formbuilder/collections/" + formId + "/records"
  //   $.ajax({
  //         url: original_get_url,
  //         dataType: 'json',
  //         cache: false,
  //         beforeSend: function (xhr) {
  //           xhr.setRequestHeader ("Authorization", "Basic " + btoa("form" + ":" + admin_token));
  //         },
  //         success: function (data) {
  //           console.log(data['data'])
  //         },
  //         error: function(xhr, status, err) {
  //           console.log(err)
  //        }
  //      });
  //     //  window.location.href = admin_url;
  //     //  return false;
  // });


  // $("#company_signup").click(function() {
  //
  //   var company_name              = $("#company_name").val();
  //   var company_location          = $("#company_location").val();
  //   var company_type              = $("#company_type").val();
  //   var company_age               = $("#company_age").val();
  //   var password                  = $("#company_password").val();
  //   var company_repeat_password   = $("#company_repeat_type").val();
  //   var company_bio               = $("#company_bio").val();
  //   var company_email             = $("#company_email").val();
  //
  //     $.ajax({
  //           type: 'POST',
  //           dataType: "json",
  //           contentType: "application/json",
  //           url: "https://stormy-refuge-52415.herokuapp.com/companies",
  //           data: JSON.stringify({
  //               "company_name"    :    company_name,
  //               "company_location":    company_location,
  //               "company_type"    :    company_type,
  //               "company_age"     :    company_age,
  //               "password"        :    password,
  //               "company_bio"     :    company_bio,
  //               "company_email"   :    company_email
  //           }),
  //           success: function (data) {
  //             alert("success")
  //             window.location.href = 'http://localhost:3000/compdash/index';
  //             return false;
  //           },
  //           error: function(e) {
  //           	console.log(e)
  //             window.location.href = 'http://localhost:3000/register_as_company/login';
  //             return false;
  //           }
  //       });
  // })
  //
  // $('#btn_download_test_results').click(function (){
  //   var password = "";
  //   $.ajax({
  //         url: 'https://stormy-refuge-52415.herokuapp.com/companies',
  //         dataType: 'json',
  //         cache: false,
  //         success: function (data) {
  //         console.log(data[0]['password_digest'])
  //
  //         },
  //         error: function(xhr, status, err) {
  //           console.log(err)
  //       }
  //   });
  //
  //
  // })
  //
  //
  // $('#btn_view_test_progress').click(function(){
  //   //Get whith Authentication
  //   var username = "EO946931";
  //   var password = "jePense2!!";
  //   var original_get_url = "https://api.pinnaclesports.com/v2/sports"
  //   $.ajax({
  //         url: original_get_url,
  //         dataType: 'json',
  //         cache: false,
  //         beforeSend: function (xhr) {
  //           xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
  //         },
  //         success: function (data) {
  //           console.log(data['data'])
  //         },
  //         error: function(xhr, status, err) {
  //           console.log(err)
  //        }
  //      });
  //      //  window.location.href = admin_url;
  //      //  return false;
  //
  // });


  //update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
  	var MqM= 768,
  		MqL = 1024;

  	var faqsSections = $('.cd-faq-group'),
  		faqTrigger = $('.cd-faq-trigger'),
  		faqsContainer = $('.cd-faq-items'),
  		faqsCategoriesContainer = $('.cd-faq-categories'),
  		faqsCategories = faqsCategoriesContainer.find('a'),
  		closeFaqsContainer = $('.cd-close-panel');

  	//select a faq section
  	faqsCategories.on('click', function(event){
  		event.preventDefault();
  		var selectedHref = $(this).attr('href'),
  			target= $(selectedHref);
  		if( $(window).width() < MqM) {
  			faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
  			closeFaqsContainer.addClass('move-left');
  			$('body').addClass('cd-overlay');
  		} else {
  	        $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200);
  		}
  	});

  	//close faq lateral panel - mobile only
  	$('body').bind('click touchstart', function(event){
  		if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) {
  			closePanel(event);
  		}
  	});
  	faqsContainer.on('swiperight', function(event){
  		closePanel(event);
  	});

  	//show faq content clicking on faqTrigger
  	faqTrigger.on('click', function(event){
  		event.preventDefault();
  		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
  	});

  	//update category sidebar while scrolling
  	$(window).on('scroll', function(){
  		if ( $(window).width() > MqL ) {
  			(!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory);
  		}
  	});

  	$(window).on('resize', function(){
  		if($(window).width() <= MqL) {
  			faqsCategoriesContainer.removeClass('is-fixed').css({
  				'-moz-transform': 'translateY(0)',
  			    '-webkit-transform': 'translateY(0)',
  				'-ms-transform': 'translateY(0)',
  				'-o-transform': 'translateY(0)',
  				'transform': 'translateY(0)',
  			});
  		}
  		if( faqsCategoriesContainer.hasClass('is-fixed') ) {
  			faqsCategoriesContainer.css({
  				'left': faqsContainer.offset().left,
  			});
  		}
  	});

  	function closePanel(e) {
  		e.preventDefault();
  		faqsContainer.removeClass('slide-in').find('li').show();
  		closeFaqsContainer.removeClass('move-left');
  		$('body').removeClass('cd-overlay');
  	}

  	function updateCategory(){
  		updateCategoryPosition();
  		updateSelectedCategory();
  	}

  	function updateCategoryPosition() {
  		var top = $('.cd-faq').offset().top,
  			height = jQuery('.cd-faq').height() - jQuery('.cd-faq-categories').height(),
  			margin = 20;
  		if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
  			var leftValue = faqsCategoriesContainer.offset().left,
  				widthValue = faqsCategoriesContainer.width();
  			faqsCategoriesContainer.addClass('is-fixed').css({
  				'left': leftValue,
  				'top': margin,
  				'-moz-transform': 'translateZ(0)',
  			    '-webkit-transform': 'translateZ(0)',
  				'-ms-transform': 'translateZ(0)',
  				'-o-transform': 'translateZ(0)',
  				'transform': 'translateZ(0)',
  			});
  		} else if( top - margin + height <= $(window).scrollTop()) {
  			var delta = top - margin + height - $(window).scrollTop();
  			faqsCategoriesContainer.css({
  				'-moz-transform': 'translateZ(0) translateY('+delta+'px)',
  			    '-webkit-transform': 'translateZ(0) translateY('+delta+'px)',
  				'-ms-transform': 'translateZ(0) translateY('+delta+'px)',
  				'-o-transform': 'translateZ(0) translateY('+delta+'px)',
  				'transform': 'translateZ(0) translateY('+delta+'px)',
  			});
  		} else {
  			faqsCategoriesContainer.removeClass('is-fixed').css({
  				'left': 0,
  				'top': 0,
  			});
  		}
  	}

  	function updateSelectedCategory() {
  		faqsSections.each(function(){
  			var actual = $(this),
  				margin = parseInt($('.cd-faq-title').eq(1).css('marginTop').replace('px', '')),
  				activeCategory = $('.cd-faq-categories a[href="#'+actual.attr('id')+'"]'),
  				topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);

  			if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
  				activeCategory.addClass('selected');
  			}else {
  				activeCategory.removeClass('selected');
  			}
  		});
  	}

})
