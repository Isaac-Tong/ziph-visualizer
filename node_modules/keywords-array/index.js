module.exports = function toArray(value, splitter) {
    var arr = value.split(splitter || /[\s,]/);

    // Trim values
    arr = arr.map(function (item) {
        return item.trim();
    });

    // Filter empty values
    arr = arr.filter(function (item) {
        return !!item;
    });

    return arr;
};
