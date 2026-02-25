for (let j = 0; j < arr.length; j++) {
    if (arr[i].employeeName === arr[j].employeeName) {
        count++;
    }
}
result.push({ employeeName: arr[i].employeeName, occurrences: count }); 