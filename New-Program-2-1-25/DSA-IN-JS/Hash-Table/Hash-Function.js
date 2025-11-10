function simpleHash(key, maxValue) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let asciiCode = key[i].charCodeAt(0);
        // console.log(asciiCode, key[i]);
      total = total + asciiCode;
    }
    // console.log("Total =",total, key);
    return total % maxValue;
}
console.log("Ajit =", simpleHash("Ajit", 50));