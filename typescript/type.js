function area(sharp, width, height) {
    var area = width * height;
    return 'i`m a' + sharp + ' area: ' + area;
}
document.body.innerHTML = area("reactAngle", 30, 15);
