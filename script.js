let unit1 = ['continuous function', 'discontinuous function', 'step discontinuity (jump)', 'removable discontinuity (hole)', 'Infinite discontinuity', 'limit', 'left and right limits as x -> a', 'definition of continuity', 'Graphs of functions that are not continuous at x = c', 'infinite limit', 'infinity', 'negative infinity', 'does not exist']
let unit2 = ['Definition of a Derivative at a Point', 'Formal Definition of a Derivative Function', 'Product Rule', 'Quotient Rule', 'Chain Rule', "Rolle's Theorem", 'Mean Value Theorem (MVT)', "L'Hopital's Rule"]
let unit3 = ['Extreme Value Theorem', 'Candidates Test', 'Increasing, Decreasing', 'Critical point', 'Relative extrema', 'First derivative test', '2nd Derivative Test', 'Concavity', 'PPOI - Possible Point of Inflection', 'POI - Point of Inflection', 'The POI Test', 'Vertical Asymptotes', 'Horizontal Asymptotes', 'Graphing Functions with Radicals', 'Slant Asymptote']
let unit4 = ['antiderivatives', 'left reimann sum', 'right riemann sum', 'midpoint riemann sum', 'limits of riemann sums', 'limit of riemann sums to a definite integral', 'properties of definite integrals', 'converting between definite integral and i-th rectangle expression', 'area and distances with the definite integral', 'evaluating definite integrals with u-substitution', 'fundamental theorem of calculus', 'average value theorem']
let unit5 = ['extrema/extremum', 'absolute max/global max', 'relative max/local max', 'absolute min/global min', 'relative min/global min', 'critical numbers', 'critical points', 'first derivative test', 'increasing/decreasing intervals', 'inflection point', 'second derivative test', 'optimization']
let unit6 = ['integrand', 'Antiderivative', 'right-hand sum', 'left-hand sum', 'Midpoint Sum', 'Trapezoidal Rule', 'Indefinite integral', 'definite integral', '1st fundamental theorem of calculus', 'Mean Value Theorem for Integrals', '2nd Fundamental Theorem of Calculus']
let unit7 = ['Exponential Growth Rate of Change', 'Exponential Growth', 'Exponential Decay Rate of Change', 'Exponential Decay', 'Logistic Differential Equation Rate of Change', 'Logistic Growth Model']
let unit8 = ['average value of a function', 'acceleration', 'velocity', 'position', 'displacement', 'total distance', 'final position', 'area between two functions with respect to "x"', 'area between two functions with respect to "y"', 'volume of a figure (x-axis)', 'volume of a figure (y-axis)', 'volume with a square cross-sections', 'volume with a rectangle cross-sections', 'volume with equilateral triangle cross-sections', 'volume with isosceles triangle cross-sections', 'volume with semicircle cross-sections', 'disc method (around x-axis)', 'disc method (around y-axis)', 'arc length formula']
let unit9 = []
let unit10 = []

// make termList a global variable
let globalTermList = [];

function findUnits() {
	activeUnits = [];
	for(i = 0; i < document.getElementsByClassName("unit").length; i++) {
		
		if(document.getElementsByClassName("unit")[i].checked == true) {
			activeUnits.push(document.getElementsByClassName("unit")[i].id);
		}
	}
	return (activeUnits);
}

function addTerms(termList, unit) {
	for(j = 0; j < unit.length; j++) {
		termList.push(unit[j]);
	}
	return termList
}

function createTermList(activeUnits) {
	termList = [];
	for(i = 0; i < activeUnits.length; i++) {
		switch (activeUnits[i]) {
			case "unit1":
				termList = addTerms(termList, unit1);
				break;
			case "unit2":
				termList = addTerms(termList, unit2);
				break;
			case "unit3":
				termList = addTerms(termList, unit3);
				break;
			case "unit4":
				termList = addTerms(termList, unit4);
				break;
			case "unit5":
				termList = addTerms(termList, unit5);
				break;
			case "unit6":
				termList = addTerms(termList, unit6);
				break;
			case "unit7":
				termList = addTerms(termList, unit7);
				break;
			case "unit8":
				termList = addTerms(termList, unit8);
				break;
			case "unit9":
				termList = addTerms(termList, unit9);
				break;
			case "unit10":
				termList = addTerms(termList, unit10);
				break;
		}
	}
	return termList;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setDeck() {
	globalTermList = createTermList(findUnits());
}

function viewTerms() {
	terms = window.open("", "", "width=310,height=185");
	
	terms.document.body.innerHTML = globalTermList;
}

function nextTerm() {
	randomIndex = getRandomInt(termList.length);
	
	document.getElementById("term").innerHTML = termList[randomIndex];
	termList.splice(randomIndex, 1);
}