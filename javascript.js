const pixel = document.createElement("div");
const btn = document.querySelector("#btn");
pixel.classList.add("pixel");

let pixelcount = 16;
//Problem 1: Creating a variable grid of divs that can be cleared
  //Subproblem 1: Variable amounts
    //This information is from a popup
    //Function parameters should fix this
      //Subproblem 1a: Button
      //Link the popup to a button
  //Subproblem 2: Organization method
    //flex-wrap will probably be necessary for this
    //Making the size depend on the input could be useful
  //Subproblem 3: Removal
    //Adding a class to the pixels will help me remove them all at once

//Solution:
  //Set up a button linked up to a function on click
btn.addEventListener("click", function gridsize() {
    //The function will create a popup and save the popup's value. If it's not an integer, it will
    //run again. This variable is initialized at 16.
    pixelcount = parseInt(prompt("Grid size"));
    if (pixelcount > 100) {
      alert("Grid sizes over 100 are unsupported");
      gridsize();
    }
    if (!Number.isInteger(pixelcount)) {
      alert("Response must include a number");
      gridsize();
    }
    return console.log(pixelcount);
});
    
  //Set up a function that runs on initialization and whenever the button is clicked
    //Remove all divs of class "pixel"
    //Run a loop value^2 times that appends pixels of width and height container.width/value to
    //container
    
//Problem 2: Divs turn black when hovered over
  //Create a function that detects hovering over objects class "pixel"
    //On hover, change its color to black