$(document).ready(function() {
 
	const inputSearch = document.querySelector(".input-search")
	const autoBox = document.querySelector(".autobox")
	
	inputSearch.onkeyup = (e) => {
		let checkData = e.target.value;
		let dataArray = []
		if (checkData) {
			dataArray = recomentlist.filter((data)=>{
			   return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
			})
			dataArray = dataArray.map((data)=>{
				return data = "<li>"+data+"</li>"
			})
			autoBox.classList.add("active")
			showadress (dataArray)
			let liItem = autoBox.querySelectorAll("li")
			for (let i=0;i<liItem.length;i++){
				  liItem[i].addEventListener("click",function(){
			   inputSearch.value = liItem[i].innerHTML
			   autoBox.classList.remove("active")
			 })
			}
			}
		else {
			autoBox.classList.remove("active")
		}
	  
	   
	}
	function showadress (list){
		let listData
		if(!list.length) {
			listData = "<li>"+inputSearch.value+"</li>"
		}
		else {
			listData = list.join("")
		}
		autoBox.innerHTML = listData
	}
	
	
	
	let recomentlist =[
		"Hà Nội",
		"Hạ Long",
		"Hồ Chí Minh",
		"Phú Quốc",
		"Nha Trang",
		"Quảng Bình",
		"Đà Nẵng",
		"Đà Lạt",
		"SaPa",
		"Vũng Tàu",
		"Phan Thiết",
		"Huế",
		"Thanh Hóa",
		"Cao Bằng",
		
	]
	const inputNumber = document.querySelector(".number-people")
	const numberBox = document.querySelector(".number-box")
	const nuberClose = document.querySelector(".number-close")
	inputNumber.addEventListener ("click", function(){
		numberBox.classList.add("active")
	})
	nuberClose.addEventListener ("click", function(){
		numberBox.classList.remove("active")
	})

	const nguoilonPlus = document.querySelector(".nguoilonPlus")
	const nguoilonMinus = document.querySelector(".nguoilonMinus")
	let nguoilonvalue = document.querySelector(".nguoilon span")
	let i=0
	nguoilonPlus.addEventListener("click",function(){
		i = i+1
		nguoilonvalue.innerHTML = i
		totalNumber () 
	})
	nguoilonMinus.addEventListener("click",function(){
		if(i<=0){
			i = 0
		} 
		else {
			i = i-1
			nguoilonvalue.innerHTML = i
			totalNumber () 
			// console.log(i)
		}

	})
	const treemPlus = document.querySelector(".treemPlus")
	const treemMinus = document.querySelector(".treemMinus")
	let treemvalue = document.querySelector(".treem span")
	let j=0
	treemPlus.addEventListener("click",function(){
		j = j+1
		treemvalue.innerHTML = j
		totalNumber () 
	})
	treemMinus.addEventListener("click",function(){
		if(j<=0){
			j = 0
		} 
		else {
			j = j-1
			treemvalue.innerHTML = j
			totalNumber () 
		
		}

	})
	const sosinhPlus = document.querySelector(".sosinhPlus")
	const sosinhMinus = document.querySelector(".sosinhMinus")
	let sosinhvalue = document.querySelector(".sosinh span")
	let f=0
	sosinhPlus.addEventListener("click",function(){
		f = f+1
		sosinhvalue.innerHTML = f
		totalNumber () 
	})
	sosinhMinus.addEventListener("click",function(){
		if(f<=0){
			f = 0
		} 
		else {
			f = f-1
			sosinhvalue.innerHTML = f
			totalNumber () 
			
		}

	})
	function totalNumber () {
		toltal = i+j+f
	inputNumber.value = toltal + " " + "Người"
		console.log(toltal)
	} 

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


$(".qtyminus").on("click",function(){
	var now = $(".qty").val();
	if ($.isNumeric(now)){
		if (parseInt(now) -1> 0)
		{ now--;}
		$(".qty").val(now);
	}
})            
$(".qtyplus").on("click",function(){
	var now = $(".qty").val();
	if ($.isNumeric(now)){
		$(".qty").val(parseInt(now)+1);
	}
});

});
