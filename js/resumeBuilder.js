skills_arr = [ "SDN" , "Networking" , "Operating-Systems" , "C" , "C++" ];


var bio = {
	"Name":"Vamshi Reddy",
	"Role":"Systems Software Developer",
	"Contacts" : {
		"mobile" : "+91-9591507111",
		"email" : "k.vamshi2008@gmail.com",
		"github" : "https://github.com/vamshireddy",
		"twitter" : "https://twitter.com/vamshi_reddy93",
		"location" : "Bangalore, India"
	},
	"Contact_info" : "k.vamshi2008@gmail.com",
	"Picture_URL" : "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/096/306/2f04ca1.jpg",
	"Welcome_msg" : "Welcome to My Portfolio",
	"Skills" : skills_arr
};

var work = {
	"job_position" : "Software Developer",
	"employer" : "Citrix Systems",
	"years_worked" : 0,
	"city" : "Bangalore"
};

var education = {
	"Name" : "Manipal University",
	"years_attended" : 4,
	"city" : "Manipal"
};

console.log(bio.Role);


formattedName = HTMLheaderName.replace("%data%",bio.Name);
formattedRole = HTMLheaderRole.replace("%data%",bio.Role);


$("#main").append(education.Name);
$("#main").append(work["job_position"]);


console.log(education.Name);