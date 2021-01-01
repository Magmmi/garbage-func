const colors = require('./src/colors-ref');

exports.printmyname = function() {
    console.log("magmmi");//
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

exports.bufferToArray = async (buffer) => {
    return await bufferToString(buffer).value.split(',')
}

exports.bufferToString = async (buffer) => {
    return await getString(buffer);
}

exports.print = {
    red: function () {
        console.log(colors.BgBlue, 'I am cyan');
        console.log(colors.FgBlue, 'I am cyan');
    }
}