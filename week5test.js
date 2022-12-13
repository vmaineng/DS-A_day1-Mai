//problem 3
//find maxarea - sliding window to find max between two elements


//find two of the highest elements = create two pointers
//see how far the distance is from reach other = base
//take min of the two elements
//take base * min of the two elements = base x height = max area

const maxArea = (height) => {
    
//create two pointers - one at the beginning and one at the end
let left = 0;
let right = height.length -1; 

//initalize value for max area at 0
let maximumArea = 0;

//iterate through the elements 
while (left < right) {

    //find the minimum of the two tallest height 
    let smallest = Math.min(height[left], height[right]);

    //calculate area between two bars and update current max (smallest) to new maximum area
    maximumArea = Math.max(maximumArea, smallest * (right - left));

    //move pointers if there exists a bar whose height is greater than current one
    if (height[left] < height[right]) {
        left ++
    } else {
        right--
    }
}
return maximumArea;
}

console.log(maxArea([4,3,2,1,4]))


//initialize logic
//then move pointers