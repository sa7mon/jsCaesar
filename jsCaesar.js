/* 
* Project Name: jsCaesar
* Created By: 	Dan Salmon (https://danthesalmon.com)
* Created On:    1/26/15
*
* Adapted from Project Nayuki, used with permission.
* (http://www.nayuki.io/page/caesar-cipher-javascript)

-Optional verbose mode with console logging for debugging.
-Clearer encrypt/decrypt mode terminology
*/

/*
 * Handles the HTML input/output for Caesar cipher encryption/decryption.
 * This is the one and only entry point function called from the HTML code.
 */
function doCrypt(mode, input, key) {
	// Change to true to enable console logging for debugging.
	var verbose = false;
	const MAX_KEY_SIZE = 26;

	console.log("doCrypt: Executing...");

	// Test if key is a number
	if (!/^-?\d+$/.test(key)) { // Matches on only number at least one digit long
		console.log("doCrypt: Key is not an integer");
		return;
	}

	// If we got here, the key is a number.

	// Now let's turn it into an int and rename it.
	var cipherKey = parseInt(shiftText, 10);

	// Time to check if the key's out of range.
	if (key < 0 || key >= MAX_KEY_SIZE) {
		console.log("doCrypt: Key is out of range");
		return;
	}

	// Check if the mode that was input is valid.
	if (mode!=="encrypt" || mode!=="decrypt") {
		// The mode parameter is invalid
		console.log("doCrypt: Mode is invalid. Valid inputs are either 'encrypt' or 'decrypt'.");
		return;
	}

	// Key has been verified to be a valid number between 1 and 26
	//if (mode )
		//cipherKey = (26 - cipherKey) % 26;
		
		//crypt(preCrypt, key);
}

/*
 * Does the heavy lifting. No validation done, so doCrypt better do it.
 */
function crypt(input, key) {
	var output = "";
		for (var i = 0; i < input.length; i++) {
		var c = input.charCodeAt(i);
		if      (c >= 65 && c <=  90) output += String.fromCharCode((c - 65 + key) % 26 + 65);  // Uppercase
		else if (c >= 97 && c <= 122) output += String.fromCharCode((c - 97 + key) % 26 + 97);  // Lowercase
		else                          output += input.charAt(i);  // Copy
	}
	return output;
}