const course = {
    course_name: "Mathematics course for JEE",
    course_price: "250",
    course_instructor: "Aayush Sakpal"
};

// course.course_instructor;

// De-structuring of objects
const {course_instructor: instructor} = course;

console.log(instructor);

// API values are fetched in form of JSON
// JSON is almost similar to objects
// {
//     "name": "Aayush Sakpal",
//     "course_name": "Mathematics",
//     "price": "Free"
// }

// Sometimes we may also get array of objects
// [
//     {},
//     {},
//     {}
// ]
// In such cases we can always loop through the array to get the objects