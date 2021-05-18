
var num = prompt("Please Enter your number : ");
var result;

switch (true) {
	case (num >= 80 && num <= 100):
		result = ("You got A+");
		break;
	case (num >= 70 && num <= 79):
		result = ("You got A");
		break;
	case (num >= 60 && num <= 69):
		result = ("You got A-");
		break;
	case (num >= 50 && num <= 59):
		result = ("You got B");
		break;
	case (num >= 40 && num <= 49):
		result = ("You got C");
		break;
	case (num >= 33 && num <= 39):
		result = ("You got D");
		break;
	case (num > 0 && num <= 32):
		result = ("You Failed");
		break;
	
	default:
		result = ("Wrong");
		break;
}

alert(result);