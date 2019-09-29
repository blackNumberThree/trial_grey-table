
let floatBox = $('#float-box');  
let widthBox = $('#width-box');
let crutchBox = $('#crutch-box'); 
let text =$('#floatBox p');

//little adaptability

floatBox.width(widthBox.width())

if(parseInt(window.innerWidth)<1000)
{
	crutchBox.removeClass("fixed"),
	floatBox.addClass("relative"), 
	text.css("margin-left", "37%"),
	text.css("text-align", "center");
}
else 
{
	text.css("margin-left", "7%"),
	//toggle float-box position
	$(window).on('scroll', function () {
		if( crutchBox.offset().top<709 ) 
				{ floatBox.removeClass("absolute")}
			 else 
			 	{floatBox.addClass("absolute") }
		if( crutchBox.offset().top>709 ) 
				{ floatBox.removeClass("fixed")}
			 else 
			 	{floatBox.addClass("fixed")  }
	})
};



