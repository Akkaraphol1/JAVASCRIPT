function reverseString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => { //forEach ทีละตัว
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Hello JavaScript"));