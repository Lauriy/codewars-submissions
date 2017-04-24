function toKelvin(temp, from_scale) {
    if (from_scale === 'C') {
        return temp + 273.15;
    } else if (from_scale === 'F') {
        return (temp + 459.67) * (5 / 9);
    } else if (from_scale === 'K') {
        return temp;
    } else if (from_scale === 'R') {
        return temp * (5 / 9);
    } else if (from_scale === 'De') {
        return 373.15 - (temp * (2 / 3));
    } else if (from_scale === 'N') {
        return temp * 100 / 33 + 273.15;
    } else if (from_scale === 'Re') {
        return temp * 5 / 4 + 273.15;
    } else if (from_scale === 'Ro') {
        return (temp - 7.5) * 40 / 21 + 273.15;
    }
}

var kelvinToOther = {
    'C': function (temp) {
        return temp - 273.15;
    },
    'K': function (temp) {
        return temp;
    },
    'F': function (temp) {
        return temp * 9 / 5 - 459.67;
    },
    'R': function (temp) {
        return temp * 9 / 5;
    },
    'De': function (temp) {
        return (373.15 - temp) * 3 / 2;
    },
    'N': function (temp) {
        return (temp - 273.15) * 33 / 100;
    },
    'Re': function (temp) {
        return (temp - 273.15) * 4 / 5;
    },
    'Ro': function (temp) {
        return (temp - 273.15) * 21 / 40 + 7.5;
    }
};

function convertTemp(temp, from_scale, to_scale) {
    return Math.round(kelvinToOther[to_scale](toKelvin(temp, from_scale)));
}