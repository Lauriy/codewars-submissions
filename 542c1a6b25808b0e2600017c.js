function windComponents(rwy, windDirection, windSpeed) {
    var runwayAngle = 0,
        rwyParts = rwy.split(''),
        windToRunwayAngle = 0,
        crosswind = 0,
        headwind = 0,
        ret = '';
    if (rwyParts.length > 1) {
        runwayAngle += parseInt(rwyParts[0]) * 100;
        runwayAngle += parseInt(rwyParts[1]) * 10;
    } else {
        runwayAngle += parseInt(rwyParts[0]) * 10;
    }
    windToRunwayAngle = runwayAngle - windDirection;
    windToRunwayAngle = Math.radians(windToRunwayAngle);
    crosswind = Math.sin(windToRunwayAngle) * windSpeed;
    headwind = Math.cos(windToRunwayAngle) * windSpeed;
    if (Math.round(headwind) > 0) {
        ret += 'Headwind ';
    } else {
        ret += 'Tailwind ';
    }
    ret += Math.round(Math.abs(headwind)) + ' knots. Crosswind ' + Math.round(Math.abs(crosswind)) + ' knots from your ';
    if (Math.round(crosswind) > 0) {
        ret += 'left.';
    } else {
        ret += 'right.';
    }

    return ret;
}

Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};