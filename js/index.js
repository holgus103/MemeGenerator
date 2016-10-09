var index = new function(){
	//controls
	var canvas = document.getElementById("ctx");
	var canvasContext = document.getElementById("ctx").getContext("2d");
	var txHeader = document.getElementById("txHeader");
	var txDesc = document.getElementById("txDesc");
	var filePicker = document.getElementById("filePicker");
	
	//event listeners
	filePicker.addEventListener("change", function(){
		showImage();
		},false);

	txDesc.addEventListener("change", function(){
			showImage();
		},false);
	
	txHeader.addEventListener("change", function(){
			showImage()
		},false);
		
	//handlers	
	function showImage(){
		var reader  = new FileReader();

		reader.addEventListener("load", function () {
			var image = new Image();
			image.addEventListener("load",function(){
				var ratio = image.width/image.height;
				canvas.height = 480;
				canvas.width = ratio * 480;
				canvasContext.drawImage(image,0,0,canvas.width,canvas.height);
				drawDescription(txDesc.value.toUpperCase());
				drawHeader(txHeader.value.toUpperCase());
			});
			image.src = reader.result;
			
		}, false);

		if (filePicker) {
			reader.readAsDataURL(filePicker.files[0]);
		}
	};
	
	function drawDescription(desc){
		canvasContext.font = "40px impact";	
		canvasContext.fillStyle = "white";
		canvasContext.strokeStyle = 'black';
		for(var size = 40; canvasContext.measureText(desc).width > canvas.width;size--){
					canvasContext.font = size + "px impact";	
		}
		var length  = canvasContext.measureText(desc).width;
		canvasContext.fillText(desc,canvas.width/2 - length/2,canvas.height - 40);
		canvasContext.strokeText(desc,canvas.width/2 - length/2,canvas.height - 40);
	};
	
	function drawHeader(header){
		canvasContext.font = "40px impact";
		canvasContext.fillStyle = "white";
		canvasContext.strokeStyle = 'black';
		for(var size = 40; canvasContext.measureText(header).width > canvas.width;size--){
					canvasContext.font = size + "px impact";	
		}
		var length  = canvasContext.measureText(header).width;
		canvasContext.fillText(header,canvas.width/2 - length/2,40);
		canvasContext.strokeText(header,canvas.width/2 - length/2,40);
	};
		
}



	