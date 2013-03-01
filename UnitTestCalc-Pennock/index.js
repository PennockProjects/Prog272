/**
 * @author John Pennock
 */
function square(a) {
	return (a*a);
}

function multiply(a,b) {
	return (a*b);
}

function divide(num,div) {
	return (num/div);
}

function add(a,b) {
	return (a+b);
}

function subtract(first, second) {
	return (first - second);
}

test("Test01", function() {
	ok(true, true);
});

test("TestSquare", function() {
	var expected = 25;
	var actual = square(5);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestMultiply", function() {
	var expected = 24;
	var actual = multiply(3,8);
	equal(actual, expected);
});

test("TestDivide", function() {
	var expected = 9;
	var actual = divide(81,9);
	equal(actual, expected);
});

test("TestDivideby0", function() {
	var expected = Infinity;
	var actual = divide(9,0);
	equal(actual, expected);
});

test("TestAdd", function() {
	var expected = 44;
	var actual = add(43,1);
	equal(actual, expected);
});

test("TestSubtract", function() {
	var expected = 0;
	var actual = subtract(5,5);
	equal(actual, expected);	
})




