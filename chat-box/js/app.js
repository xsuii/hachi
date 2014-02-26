var bubbleCount = 0; // count bubbles, for later identify

function addBubble(msg, img, side) {
	bubbleCount++;
	var bubbleId = 'bubble' + bubbleCount;
	var flipx = '';
	if (side == 'right') {	// default bubble is on the left, so bubbles on the right should flip horizontal(adding flipx class).
		flipx = ' flipx';
	};
	/* add bubbles nodes with specific identify*/
	$('#bubbles').append(
		'<div id="' + bubbleId + '" class="bubble-wrapper'+flipx+'">\
				<div class="gravatar left'+flipx+'"></div>\
				<div class="dialogue-wrapper">\
					<div class="triangle left"></div>\
					<div class="dialogue'+flipx+'">\
						<p></p>\
					</div>\
				</div>\
			</div>');
	$('#' + bubbleId).find('.gravatar').css({ // add gravatar
		'background-image': img
	});
	$('#' + bubbleId).find('p').text(msg); // add info
	$('#bubbles').scrollTop(100000000000000000); // keep scroll bottom
}

$(document).ready(function() {
	/* sending message */
	$('#send-button').on('click', function() {
		var msg = $('#text-box').val();
		$('#text-box').val(''); // clear text
		addBubble(msg, 'url(./img/head-sculpture/sherlock80_80.jpg)', 'left');
	});
	$('.footer').find('#text-box').bind('enterKey', function() { // handle 'enter key' event
		var msg = $('#text-box').val();
		$('#text-box').val(''); // clear text
		addBubble(msg, 'url(./img/head-sculpture/sherlock80_80.jpg)', 'right');
	});
	$('.footer').find('#text-box').keyup(function(e) {
		if (e.keyCode == 13) {
			$(this).trigger("enterKey");
		}
	});
});