var resize_picture = function(w, h){
	if ( w > h){
		$('.image .picture').css('width', w);
		$('.image .picture').css('height', undefined);
	} else {
		$('.image .picture').css('width', undefined);
		$('.image .picture').css('height', h);
	}
}

var resize_picture_container = function(w, h) {
	$('.image').css('width', w);
	$('.image').css('height', h);
}

var resize_picture_info_box = function(w, h) {
	$('.info_box').css('width', w);
	$('.info_box').css('height', 200);
	$('.info_box').css('top', 0);
}

var split_image_list_data = function(data) {
	var images = [];
	var qr_codes = [];
	
	for (var i = 0; i < data.length; i++){
		images.push(data[i]['image']);
		qr_codes.push(data[i]['qrcode']);
	}

	return {
		'images': images, 
		'qr_codes': qr_codes
	};
}