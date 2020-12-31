exports.printmyname = function() {
    console.log("magmmi");//
    console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
}

exports.shuffle = async array => {
    for (var i = array.length - 1; i > 0; i--) {
        var randomInt = Math.floor(Math.random() * (i + 1));
        var a = array[i];
        array[i] = array[randomInt];
        array[randomInt] = a;
    }
    return array
}

