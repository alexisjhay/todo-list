export function isEmpty(textbox) {
	if (!textbox.value.trim()) {
		alert("This field cannot be empty. Please enter a value.");
		return true;
	}
	return false;
}
