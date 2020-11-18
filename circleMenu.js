// CUSTOMIZE:

var menu = [
	{ id:"c1", img:"logo_test_1.png" },
	{ id:"c2", img:"logo_test_2.png" },
	{ id:"c3", img:"logo_test_3.png" },
	{ id:"c4", img:"logo_test_4.png" },
	{ id:"c5", img:"logo_test_5.png" },
	{ id:"c6", img:"logo_test_6.png" },
	{ id:"c7", img:"logo_test_7.png" },
	{ id:"c8", img:"logo_test_8.png" }
]

var toggleClickLogo = "logo_togglebutton.png";

// FUNCTIONALITY:
var angleStart = -360;

function createMenuItems(item) {
	var li = document.createElement("li");
	var input = document.createElement("input");
	input.setAttribute("id", item.id);
	input.setAttribute("type", "checkbox");
	li.appendChild(input);
	var label = document.createElement("label");
	label.setAttribute("for", item.id);
	var img = document.createElement("img");
	img.setAttribute("src", item.img);
	img.setAttribute("style", "width:80%;height:80%;");
	label.appendChild(img);
	li.appendChild(label);
	
	document.getElementById("menuItems").appendChild(li);
}

function initialize() {
	menu.forEach(createMenuItems);
	var label = document.createElement("label");
	var img = document.createElement("img");
	img.setAttribute("src", toggleClickLogo);
	img.setAttribute("style", "width:80%;height:80%;");
	label.appendChild(img);
	document.getElementById("toggleButton").appendChild(label);
}

function rotate(li,d) {
	$({d:angleStart}).animate({d:d}, {
		step: function(now) {
			$(li)
				.css({ transform: 'rotate('+now+'deg)' })
				.find('label')
					.css({ transform: 'rotate('+(-now)+'deg)' });
		}, duration: 0
	});
}

function toggleClass(element, classId) {
	var currentClass = element.className;
	var newClass
	if (hasClass(element, classId)) {
		newClass = currentClass.replace(new RegExp('\\b' + classId + '\\b','g'),"")
	}
	else {
		newClass = currentClass + " " + classId;
	}
	element.className = newClass.trim();
}

function hasClass(element, classId) {
	return new RegExp('(\\s|^)' + classId + '(\\s|$)').test(element.className);
}

function buttonClick() {
	var selector = document.getElementById("menuDiv");
	toggleClass(selector, 'open');
	var li = document.getElementById("menuItems").childNodes;
	var deg = hasClass(selector, 'half') ? 180/(li.length-1) : 360/li.length;
	for(var i=0; i<li.length; i++) {
		var d = hasClass(selector, 'half') ? (i*deg)-90 : i*deg;
		hasClass(selector, 'open') ? rotate(li[i],d) : rotate(li[i],angleStart);
	}

}