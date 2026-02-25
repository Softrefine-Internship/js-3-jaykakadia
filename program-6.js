// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
    // {
    //     employee_id: 1,
    //     employee_name: "Aman",
    // },
    // {
    //     employee_id: 2,
    //     employee_name: "Bhargava",
    // },
    // {
    //     employee_id: 3,
    //     employee_name: "Chaitanya",
    // },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 

const arr = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];

function modifyProperty(arr, property, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][property] === value) {
            arr[i][property] = value;
        }
    }
    return arr;
}
console.log(modifyProperty(arr, "employee_name", "Rahul"));


