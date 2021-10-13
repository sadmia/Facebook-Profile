"use strict";

let input_Profile_Name = "Sad Mia";
let input_Profile_Image = "images/profile/profile.jpg";

let input_profile_link = "https://facebook.com/sadmia.page"

let input_video_1 = "video/Facebook-Post.mp4";


let Input_firnd_1 = "images/friends/profile-1.jpg";
let Input_firnd_2 = "images/friends/profile-2.jpg";
let Input_firnd_3 = "images/friends/profile-3.jpg";
let Input_firnd_4 = "images/friends/profile-4.jpg";
let Input_firnd_5 = "images/friends/profile-5.jpg";
let Input_firnd_6 = "images/friends/profile-6.jpg";
let Input_firnd_7 = "images/friends/profile-7.jpg";
let Input_firnd_8 = "images/friends/profile-8.jpg";
let Input_firnd_9 = "images/friends/profile-9.jpg";


let Input_post_img_1 = "images/post/1.jpg";
let Input_post_img_2 = "images/post/2.jpg";
let Input_post_img_3 = "images/post/3.jpg";
let Input_post_img_4 = "images/post/4.jpg";
let Input_post_img_5 = "images/post/5.jpg";
let Input_post_img_6 = "images/post/6.jpg";
let Input_post_img_7 = "images/post/7.jpg";
let Input_post_img_8 = "images/post/8.jpg";
let Input_post_img_9 = "images/post/9.jpg";
let Input_post_img_10 = "images/post/10.jpg";
let Input_post_img_11 = "images/post/11.jpg";
let Input_post_img_12 = "images/post/12.jpg";





let profile_images = document.querySelectorAll('#Profile_images');
let profile_name = document.querySelectorAll(' #profile_name');
let profile_link = document.querySelectorAll(' #profile-link');

for (let i = 0; i < profile_images.length; i++) {
		profile_images[i].src = input_Profile_Image;
}

for (let i = 0; i < profile_link.length; i++) {
		profile_link[i].href = input_profile_link;
		// profile_link[i].target = "facebook";
}

for (let i = 0; i < profile_name.length; i++) {
	profile_name[i].innerHTML = input_Profile_Name;
}


let lcs_btn_i = document.querySelector(".lcs-btn_i");
let post_icon_btn_i = document.querySelector("#post-icon-btn_i");
let post_icon_text_i = document.querySelector("#post-icon-text_i");

lcs_btn_i.addEventListener("click", function() {
	post_icon_btn_i.classList.toggle("fas");
	post_icon_text_i.innerHTML = "Like";
	post_icon_text_i.classList.toggle("like-controle");
	post_icon_btn_i.classList.toggle("like-controle");
})


let lcs_btn_v = document.querySelector(".lcs-btn_v");
let post_icon_btn_v = document.querySelector("#post-icon-btn_v");
let post_icon_text_v = document.querySelector("#post-icon-text_v");

lcs_btn_v.addEventListener("click", function() {
	post_icon_btn_v.classList.toggle("fas");
	post_icon_text_v.innerHTML = "Like";
	post_icon_text_v.classList.toggle("like-controle");
	post_icon_btn_v.classList.toggle("like-controle");
})


let lcs_btn_t = document.querySelector(".lcs-btn_t");
let post_icon_btn_t = document.querySelector("#post-icon-btn_t");
let post_icon_text_t = document.querySelector("#post-icon-text_t");

lcs_btn_t.addEventListener("click", function() {
	post_icon_btn_t.classList.toggle("fas");
	post_icon_text_t.innerHTML = "Like";
	post_icon_text_t.classList.toggle("like-controle");
	post_icon_btn_t.classList.toggle("like-controle");
})



let lcs_btn_bt = document.querySelector(".lcs-btn_bt");
let post_icon_btn_bt = document.querySelector("#post-icon-btn_bt");
let post_icon_text_bt = document.querySelector("#post-icon-text_bt");

lcs_btn_bt.addEventListener("click", function() {
	post_icon_btn_bt.classList.toggle("fas");
	post_icon_text_bt.innerHTML = "Like";
	post_icon_text_bt.classList.toggle("like-controle");
	post_icon_btn_bt.classList.toggle("like-controle");
})



let lcs_btn_2i = document.querySelector(".lcs-btn_2i");
let post_icon_btn_2i = document.querySelector("#post-icon-btn_2i");
let post_icon_text_2i = document.querySelector("#post-icon-text_2i");

lcs_btn_2i.addEventListener("click", function() {
	post_icon_btn_2i.classList.toggle("fas");
	post_icon_text_2i.innerHTML = "Like";
	post_icon_text_2i.classList.toggle("like-controle");
	post_icon_btn_2i.classList.toggle("like-controle");
})



let lcs_btn_3i = document.querySelector(".lcs-btn_3i");
let post_icon_btn_3i = document.querySelector("#post-icon-btn_3i");
let post_icon_text_3i = document.querySelector("#post-icon-text_3i");

lcs_btn_3i.addEventListener("click", function() {
	post_icon_btn_3i.classList.toggle("fas");
	post_icon_text_3i.innerHTML = "Like";
	post_icon_text_3i.classList.toggle("like-controle");
	post_icon_btn_3i.classList.toggle("like-controle");
})



let lcs_btn_4i = document.querySelector(".lcs-btn_4i");
let post_icon_btn_4i = document.querySelector("#post-icon-btn_4i");
let post_icon_text_4i = document.querySelector("#post-icon-text_4i");

lcs_btn_4i.addEventListener("click", function() {
	post_icon_btn_4i.classList.toggle("fas");
	post_icon_text_4i.innerHTML = "Like";
	post_icon_text_4i.classList.toggle("like-controle");
	post_icon_btn_4i.classList.toggle("like-controle");
})


let lcs_btn_plus_i = document.querySelector(".lcs-btn_plus_i");
let post_icon_btn_plus_i = document.querySelector("#post-icon-btn_plus_i");
let post_icon_text_plus_i = document.querySelector("#post-icon-text_plus_i");

lcs_btn_plus_i.addEventListener("click", function() {
	post_icon_btn_plus_i.classList.toggle("fas");
	post_icon_text_plus_i.innerHTML = "Like";
	post_icon_text_plus_i.classList.toggle("like-controle");
	post_icon_btn_plus_i.classList.toggle("like-controle");
})



let select_audience = document.querySelector(".popop-background");
let popop_background = document.querySelector(".Select-audience");
let public_btn_i = document.getElementById('public-btn-i');


public_btn_i.addEventListener("click", function() {
	popop_background.classList.toggle("dis_block");
	select_audience.classList.toggle("dis_block");
})

let popup_close_btn = document.getElementById("popup-close-btn");

popup_close_btn.addEventListener("click", function() {
	select_audience.classList.remove("dis_block")
	popop_background.classList.remove("dis_block")
})

select_audience.addEventListener("click", function() {
	select_audience.classList.remove("dis_block")
	popop_background.classList.remove("dis_block")
})



let public_btn = document.getElementById("public-btn");
let friends_btn = document.getElementById("friends-btn");
let lock_btn = document.getElementById("lock-btn");

let public_li_icon = document.getElementById("public-li-icon");
let friends_li_icon = document.getElementById("friends-li-icon");
let lock_li_icon = document.getElementById("lock-li-icon");

public_btn.addEventListener("click", function() {
	public_btn.classList.add("activ-li-div");
	friends_btn.classList.remove("activ-li-div");

	public_li_icon.classList.add("activ-li-icon");
	public_li_icon.classList.add("fa-dot-circle");

	lock_li_icon.classList.remove("activ-li-icon");
	public_btn_i.classList.remove("fa-lock");
	lock_li_icon.classList.add("fa-circle");
	lock_btn.classList.remove("activ-li-div");

	friends_li_icon.classList.remove("activ-li-icon");
	friends_li_icon.style.color= "#707070";
	friends_li_icon.classList.add("fa-circle");
	friends_li_icon.classList.remove("fa-dot-circle");

	public_btn_i.classList.add("fa-globe-europe");
	public_btn_i.classList.remove("fa-user-friends");

	select_audience.classList.remove("dis_block")
	popop_background.classList.remove("dis_block")
})



friends_btn.addEventListener("click", function() {
	public_btn.classList.remove("activ-li-div");
	friends_btn.classList.add("activ-li-div");

	public_li_icon.classList.remove("activ-li-icon");
	public_li_icon.classList.remove("fa-dot-circle");

	friends_li_icon.classList.add("activ-li-icon");
	friends_li_icon.classList.remove("fa-circle");
	friends_li_icon.classList.add("fa-dot-circle");

	lock_li_icon.classList.remove("activ-li-icon");
	public_btn_i.classList.remove("fa-lock");
	lock_li_icon.classList.add("fa-circle");
	lock_btn.classList.remove("activ-li-div");
	lock_li_icon.classList.remove("fa-dot-circle");

	public_btn_i.classList.remove("fa-globe-europe");
	public_btn_i.classList.add("fa-user-friends");

	select_audience.classList.remove("dis_block")
	popop_background.classList.remove("dis_block")
})


lock_btn.addEventListener("click", function() {
	public_btn.classList.remove("activ-li-div");
	friends_btn.classList.remove("activ-li-div");

	public_li_icon.classList.remove("activ-li-icon");
	public_li_icon.classList.remove("fa-dot-circle");

	friends_li_icon.classList.remove("activ-li-icon");
	friends_li_icon.style.color= "#707070";
	friends_li_icon.classList.add("fa-circle");
	friends_li_icon.classList.remove("fa-dot-circle");

	lock_li_icon.classList.remove("fa-circle");
	lock_li_icon.classList.add("fa-dot-circle");
	lock_li_icon.classList.add("activ-li-icon");
	lock_btn.classList.add("activ-li-div");

	public_btn_i.classList.remove("fa-globe-europe");
	public_btn_i.classList.remove("fa-user-friends");
	public_btn_i.classList.add("fa-lock");

	select_audience.classList.remove("dis_block")
	popop_background.classList.remove("dis_block")
})



let thim_button = document.getElementById("thim-button");
let thim_div = document.querySelector(".thim-div");

thim_button.addEventListener("click",function() {
	thim_div.classList.toggle("click-btn-td");
	thim_button.classList.toggle("fa-caret-left");
	thim_button.classList.toggle("fa-caret-right");
})




let bg_c_1 = document.getElementById("bg-c-1");
let bg_c_2 = document.getElementById("bg-c-2");
let bg_c_3 = document.getElementById("bg-c-3");
let bg_c_4 = document.getElementById("bg-c-4");
let bg_c_5 = document.getElementById("bg-c-5");
let bg_c_6 = document.getElementById("bg-c-6");

let txt_c_1 = document.getElementById("txt-c-1");
let txt_c_2 = document.getElementById("txt-c-2");
let txt_c_3 = document.getElementById("txt-c-3");
let txt_c_4 = document.getElementById("txt-c-4");
let txt_c_5 = document.getElementById("txt-c-5");
let txt_c_6 = document.getElementById("txt-c-6");

let post_section = document.querySelector(".post-section");
let profile_section = document.querySelector(".profile-section");
let full_navbar = document.querySelector(".full-navbar");
let cover_image_section = document.querySelector(".cover-image-section");

bg_c_1.addEventListener("click", function() {
	post_section.classList.add("bg-color-1");
	profile_section.classList.add("bg-color-1");
	full_navbar.classList.add("bg-color-1");
	cover_image_section.classList.add("cover-background-1");

	post_section.classList.remove("bg-color-2");
	profile_section.classList.remove("bg-color-2");
	full_navbar.classList.remove("bg-color-2");
	cover_image_section.classList.remove("cover-background-2");

	post_section.classList.remove("bg-color-3");
	profile_section.classList.remove("bg-color-3");
	full_navbar.classList.remove("bg-color-3");
	cover_image_section.classList.remove("cover-background-3");

	post_section.classList.remove("bg-color-4");
	profile_section.classList.remove("bg-color-4");
	full_navbar.classList.remove("bg-color-4");
	cover_image_section.classList.remove("cover-background-4");

	post_section.classList.remove("bg-color-5");
	profile_section.classList.remove("bg-color-5");
	full_navbar.classList.remove("bg-color-5");
	cover_image_section.classList.remove("cover-background-5");

	post_section.classList.remove("bg-color-6");
	profile_section.classList.remove("bg-color-6");
	full_navbar.classList.remove("bg-color-6");
	cover_image_section.classList.remove("cover-background-6");
})

bg_c_2.addEventListener("click", function() {
	post_section.classList.add("bg-color-2");
	profile_section.classList.add("bg-color-2");
	full_navbar.classList.add("bg-color-2");
	cover_image_section.classList.add("cover-background-2");

	post_section.classList.remove("bg-color-1");
	profile_section.classList.remove("bg-color-1");
	full_navbar.classList.remove("bg-color-1");
	cover_image_section.classList.remove("cover-background-1");

	post_section.classList.remove("bg-color-3");
	profile_section.classList.remove("bg-color-3");
	full_navbar.classList.remove("bg-color-3");
	cover_image_section.classList.remove("cover-background-3");

	post_section.classList.remove("bg-color-4");
	profile_section.classList.remove("bg-color-4");
	full_navbar.classList.remove("bg-color-4");
	cover_image_section.classList.remove("cover-background-4");

	post_section.classList.remove("bg-color-5");
	profile_section.classList.remove("bg-color-5");
	full_navbar.classList.remove("bg-color-5");
	cover_image_section.classList.remove("cover-background-5");

	post_section.classList.remove("bg-color-6");
	profile_section.classList.remove("bg-color-6");
	full_navbar.classList.remove("bg-color-6");
	cover_image_section.classList.remove("cover-background-6");
})

bg_c_3.addEventListener("click", function() {
	post_section.classList.add("bg-color-3");
	profile_section.classList.add("bg-color-3");
	full_navbar.classList.add("bg-color-3");
	cover_image_section.classList.add("cover-background-3");

	post_section.classList.remove("bg-color-2");
	profile_section.classList.remove("bg-color-2");
	full_navbar.classList.remove("bg-color-2");
	cover_image_section.classList.remove("cover-background-2");

	post_section.classList.remove("bg-color-1");
	profile_section.classList.remove("bg-color-1");
	full_navbar.classList.remove("bg-color-1");
	cover_image_section.classList.remove("cover-background-1");

	post_section.classList.remove("bg-color-4");
	profile_section.classList.remove("bg-color-4");
	full_navbar.classList.remove("bg-color-4");
	cover_image_section.classList.remove("cover-background-4");

	post_section.classList.remove("bg-color-5");
	profile_section.classList.remove("bg-color-5");
	full_navbar.classList.remove("bg-color-5");
	cover_image_section.classList.remove("cover-background-5");

	post_section.classList.remove("bg-color-6");
	profile_section.classList.remove("bg-color-6");
	full_navbar.classList.remove("bg-color-6");
	cover_image_section.classList.remove("cover-background-6");
})

bg_c_4.addEventListener("click", function() {
	post_section.classList.add("bg-color-4");
	profile_section.classList.add("bg-color-4");
	full_navbar.classList.add("bg-color-4");
	cover_image_section.classList.add("cover-background-4");

	post_section.classList.remove("bg-color-2");
	profile_section.classList.remove("bg-color-2");
	full_navbar.classList.remove("bg-color-2");
	cover_image_section.classList.remove("cover-background-2");

	post_section.classList.remove("bg-color-3");
	profile_section.classList.remove("bg-color-3");
	full_navbar.classList.remove("bg-color-3");
	cover_image_section.classList.remove("cover-background-3");

	post_section.classList.remove("bg-color-1");
	profile_section.classList.remove("bg-color-1");
	full_navbar.classList.remove("bg-color-1");
	cover_image_section.classList.remove("cover-background-1");

	post_section.classList.remove("bg-color-5");
	profile_section.classList.remove("bg-color-5");
	full_navbar.classList.remove("bg-color-5");
	cover_image_section.classList.remove("cover-background-5");

	post_section.classList.remove("bg-color-6");
	profile_section.classList.remove("bg-color-6");
	full_navbar.classList.remove("bg-color-6");
	cover_image_section.classList.remove("cover-background-6");
})

bg_c_5.addEventListener("click", function() {
	post_section.classList.add("bg-color-5");
	profile_section.classList.add("bg-color-5");
	full_navbar.classList.add("bg-color-5");
	cover_image_section.classList.add("cover-background-5");

	post_section.classList.remove("bg-color-2");
	profile_section.classList.remove("bg-color-2");
	full_navbar.classList.remove("bg-color-2");
	cover_image_section.classList.remove("cover-background-2");

	post_section.classList.remove("bg-color-3");
	profile_section.classList.remove("bg-color-3");
	full_navbar.classList.remove("bg-color-3");
	cover_image_section.classList.remove("cover-background-3");

	post_section.classList.remove("bg-color-4");
	profile_section.classList.remove("bg-color-4");
	full_navbar.classList.remove("bg-color-4");
	cover_image_section.classList.remove("cover-background-4");

	post_section.classList.remove("bg-color-1");
	profile_section.classList.remove("bg-color-1");
	full_navbar.classList.remove("bg-color-1");
	cover_image_section.classList.remove("cover-background-1");

	post_section.classList.remove("bg-color-6");
	profile_section.classList.remove("bg-color-6");
	full_navbar.classList.remove("bg-color-6");
	cover_image_section.classList.remove("cover-background-6");
})

bg_c_6.addEventListener("click", function() {
	post_section.classList.add("bg-color-6");
	profile_section.classList.add("bg-color-6");
	full_navbar.classList.add("bg-color-6");
	cover_image_section.classList.add("cover-background-6");

	post_section.classList.remove("bg-color-2");
	profile_section.classList.remove("bg-color-2");
	full_navbar.classList.remove("bg-color-2");
	cover_image_section.classList.remove("cover-background-2");

	post_section.classList.remove("bg-color-3");
	profile_section.classList.remove("bg-color-3");
	full_navbar.classList.remove("bg-color-3");
	cover_image_section.classList.remove("cover-background-3");

	post_section.classList.remove("bg-color-4");
	profile_section.classList.remove("bg-color-4");
	full_navbar.classList.remove("bg-color-4");
	cover_image_section.classList.remove("cover-background-4");

	post_section.classList.remove("bg-color-5");
	profile_section.classList.remove("bg-color-5");
	full_navbar.classList.remove("bg-color-5");
	cover_image_section.classList.remove("cover-background-5");

	post_section.classList.remove("bg-color-1");
	profile_section.classList.remove("bg-color-1");
	full_navbar.classList.remove("bg-color-1");
	cover_image_section.classList.remove("cover-background-1");
})


let pro_txt = document.querySelector(".pro-txt");
let fir_count_txt = document.querySelector(".fir-count-txt");
let txt_cc = document.querySelectorAll(".txt-cc");
let activ_navbar = document.querySelector(".activ-navbar");



txt_c_1.addEventListener("click", function() {
	pro_txt.classList.add("text-color-1");
	fir_count_txt.classList.add("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");


	pro_txt.classList.remove("text-color-2");
	fir_count_txt.classList.remove("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-3");
	fir_count_txt.classList.remove("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-4");
	fir_count_txt.classList.remove("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-5");
	fir_count_txt.classList.remove("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-6");
	fir_count_txt.classList.remove("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");

})


txt_c_2.addEventListener("click", function() {
	pro_txt.classList.add("text-color-2");
	fir_count_txt.classList.add("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-1");
	fir_count_txt.classList.remove("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");


	pro_txt.classList.remove("text-color-3");
	fir_count_txt.classList.remove("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-4");
	fir_count_txt.classList.remove("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-5");
	fir_count_txt.classList.remove("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-6");
	fir_count_txt.classList.remove("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");

})



txt_c_3.addEventListener("click", function() {
	pro_txt.classList.add("text-color-3");
	fir_count_txt.classList.add("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-2");
	fir_count_txt.classList.remove("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-1");
	fir_count_txt.classList.remove("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");


	pro_txt.classList.remove("text-color-4");
	fir_count_txt.classList.remove("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-5");
	fir_count_txt.classList.remove("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-6");
	fir_count_txt.classList.remove("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");

})


txt_c_4.addEventListener("click", function() {
	pro_txt.classList.add("text-color-4");
	fir_count_txt.classList.add("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-2");
	fir_count_txt.classList.remove("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-3");
	fir_count_txt.classList.remove("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-1");
	fir_count_txt.classList.remove("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");


	pro_txt.classList.remove("text-color-5");
	fir_count_txt.classList.remove("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-6");
	fir_count_txt.classList.remove("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");

})



txt_c_5.addEventListener("click", function() {
	pro_txt.classList.add("text-color-5");
	fir_count_txt.classList.add("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-2");
	fir_count_txt.classList.remove("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-3");
	fir_count_txt.classList.remove("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-4");
	fir_count_txt.classList.remove("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-1");
	fir_count_txt.classList.remove("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");


	pro_txt.classList.remove("text-color-6");
	fir_count_txt.classList.remove("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");

})


txt_c_6.addEventListener("click", function() {
	pro_txt.classList.add("text-color-6");
	fir_count_txt.classList.add("text-color-6");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.add("text-color-6");
	}
	activ_navbar.classList.remove("text-color-6");


	pro_txt.classList.remove("text-color-2");
	fir_count_txt.classList.remove("text-color-2");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-2");
	}
	activ_navbar.classList.remove("text-color-2");


	pro_txt.classList.remove("text-color-3");
	fir_count_txt.classList.remove("text-color-3");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-3");
	}
	activ_navbar.classList.remove("text-color-3");


	pro_txt.classList.remove("text-color-4");
	fir_count_txt.classList.remove("text-color-4");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-4");
	}
	activ_navbar.classList.remove("text-color-4");


	pro_txt.classList.remove("text-color-5");
	fir_count_txt.classList.remove("text-color-5");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-5");
	}
	activ_navbar.classList.remove("text-color-5");


	pro_txt.classList.remove("text-color-1");
	fir_count_txt.classList.remove("text-color-1");

	for (let i = 0; i < txt_cc.length; i++) {
		txt_cc[i].classList.remove("text-color-1");
	}
	activ_navbar.classList.remove("text-color-1");

})













let firend_img_1 = document.querySelectorAll("#frind-image-1");
let firend_img_2 = document.querySelectorAll("#frind-image-2");
let firend_img_3 = document.querySelectorAll("#frind-image-3");
let firend_img_4 = document.querySelectorAll("#frind-image-4");
let firend_img_5 = document.querySelectorAll("#frind-image-5");
let firend_img_6 = document.querySelectorAll("#frind-image-6");
let firend_img_7 = document.querySelectorAll("#frind-image-7");
let firend_img_8 = document.querySelectorAll("#frind-image-8");
let firend_img_9 = document.querySelectorAll("#frind-image-9");



let post_image_1 = document.querySelectorAll("#post-image-1");
let post_image_2 = document.querySelectorAll("#post-image-2");
let post_image_3 = document.querySelectorAll("#post-image-3");
let post_image_4 = document.querySelectorAll("#post-image-4");
let post_image_5 = document.querySelectorAll("#post-image-5");
let post_image_6 = document.querySelectorAll("#post-image-6");
let post_image_7 = document.querySelectorAll("#post-image-7");
let post_image_8 = document.querySelectorAll("#post-image-8");
let post_image_9 = document.querySelectorAll("#post-image-9");

let post_image_10 = document.querySelectorAll("#post-image-10");
let post_image_11 = document.querySelectorAll("#post-image-11");
let post_image_12 = document.querySelectorAll("#post-image-12");



for (let i = 0; i < firend_img_1.length; i++) {
	firend_img_1[i].src = Input_firnd_1;
		firend_img_1[i].target = "frind";
}
for (let i = 0; i < firend_img_2.length; i++) {
	firend_img_2[i].src = Input_firnd_2;
		firend_img_2[i].target = "frind";
}
for (let i = 0; i < firend_img_3.length; i++) {
	firend_img_3[i].src = Input_firnd_3;
		firend_img_3[i].target = "frind";
}
for (let i = 0; i < firend_img_4.length; i++) {
	firend_img_4[i].src = Input_firnd_4;
		firend_img_4[i].target = "frind";
}
for (let i = 0; i < firend_img_5.length; i++) {
	firend_img_5[i].src = Input_firnd_5;
		firend_img_5[i].target = "frind";
}
for (let i = 0; i < firend_img_6.length; i++) {
	firend_img_6[i].src = Input_firnd_6;
		firend_img_6[i].target = "frind";
}
for (let i = 0; i < firend_img_7.length; i++) {
	firend_img_7[i].src = Input_firnd_7;
		firend_img_7[i].target = "frind";
}
for (let i = 0; i < firend_img_8.length; i++) {
	firend_img_8[i].src = Input_firnd_8;
		firend_img_8[i].target = "frind";
}
for (let i = 0; i < firend_img_9.length; i++) {
	firend_img_9[i].src = Input_firnd_9;
		firend_img_9[i].target = "frind";
}



for (let i = 0; i < post_image_1.length; i++) {
	post_image_1[i].src = Input_post_img_1;
}
for (let i = 0; i < post_image_2.length; i++) {
	post_image_2[i].src = Input_post_img_2;
}
for (let i = 0; i < post_image_3.length; i++) {
	post_image_3[i].src = Input_post_img_3;
}
for (let i = 0; i < post_image_4.length; i++) {
	post_image_4[i].src = Input_post_img_4;
}
for (let i = 0; i < post_image_5.length; i++) {
	post_image_5[i].src = Input_post_img_5;
}
for (let i = 0; i < post_image_6.length; i++) {
	post_image_6[i].src = Input_post_img_6;
}
for (let i = 0; i < post_image_7.length; i++) {
	post_image_7[i].src = Input_post_img_7;
}
for (let i = 0; i < post_image_8.length; i++) {
	post_image_8[i].src = Input_post_img_8;
}
for (let i = 0; i < post_image_9.length; i++) {
	post_image_9[i].src = Input_post_img_9;
}
for (let i = 0; i < post_image_10.length; i++) {
	post_image_10[i].src = Input_post_img_10;
}
for (let i = 0; i < post_image_11.length; i++) {
	post_image_11[i].src = Input_post_img_11;
}
for (let i = 0; i < post_image_12.length; i++) {
	post_image_12[i].src = Input_post_img_12;
}



let vidio_tge = document.querySelectorAll("#vidio-tge");
let video_update = document.querySelectorAll("#video-update");

for (let i = 0; i < vidio_tge.length; i++) {
	vidio_tge[i].src = input_video_1;
	video_update[i].src = input_video_1;
}



let bio_edit_btn = document.querySelector("#bio-edit-btn");
let bio_text = document.querySelector("#bio-text");

let bio_btn_click = document.querySelector(".bio-btn-click");

let length_count = document.getElementById("length-count");


let input_box = document.querySelector(".input-box");

bio_edit_btn.addEventListener("click", function() {
	bio_text.classList.add("bio-btn-click");
	bio_btn_click.classList.remove("bio-btn-click");

	let input_length = 101 - input_box.value.length;
	length_count.innerHTML = input_length;

	if (input_length <= 101 && input_length >= 30) {
		length_count.style.color= "green";
	} else if (input_length <= 31 && input_length >= 6) {
		length_count.style.color= "#C24641";

	} else if (input_length <= 5 && input_length >= 0) {
		length_count.style.color= "red";
	}

	input_box.addEventListener("input", function() {
		let input_length = 101 - input_box.value.length;
		length_count.innerHTML = input_length;

		if (input_length <= 101 && input_length >= 30) {
			length_count.style.color= "green";
		} else if (input_length <= 31 && input_length >= 6) {
			length_count.style.color= "#C24641";

			if (input_length == 9) {
				length_count.innerHTML = "09";
			} else if (input_length == 8) {
				length_count.innerHTML = "08";
			} else if (input_length == 7) {
				length_count.innerHTML = "07";
			} else if (input_length == 6) {
				length_count.innerHTML = "06";
			}

		} else if (input_length <= 5 && input_length >= 0) {
			length_count.style.color= "red";

			if (input_length == 5) {
				length_count.innerHTML = "05";
			} else if (input_length == 4) {
				length_count.innerHTML = "04";
			} else if (input_length == 3) {
				length_count.innerHTML = "03";
			} else if (input_length == 2) {
				length_count.innerHTML = "02";
			} else if (input_length == 1) {
				length_count.innerHTML = "01";
			} else if (input_length == 0) {
				length_count.innerHTML = "00";
			}
		} else {
			length_count.innerHTML = "00";
		}
	})

})

let cencel_btn = document.querySelector("#cencel-btn");
let save_btn = document.querySelector("#save-btn");

cencel_btn.addEventListener("click", function() {
	bio_text.classList.remove("bio-btn-click");
	bio_btn_click.classList.add("bio-btn-click");
})

save_btn.addEventListener("click", function() {
	bio_text.classList.remove("bio-btn-click");
	bio_btn_click.classList.add("bio-btn-click");
	let input_b_vlaue = String(input_box.value);
	bio_text.innerHTML = input_b_vlaue;
})