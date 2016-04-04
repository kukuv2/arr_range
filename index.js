module.exports = function(begin, end, type) {
    var arr = [];
    var stepBy;
    if(Object.prototype.toString.call(type) === '[object String]') {
        var rOption = /(r)/, lOption = /(l)/, stepOption = /(\d)+/;
        var reg     = RegExp([rOption.source, lOption.source, stepOption.source].join('|'), 'g');
        type.replace(reg, function(match, r, l, step, index) {
            if(r) {
                begin++;
            } else if(l) {
                end--;
            } else if(step) {
                var operator = type.charAt(index - 1);
                var funcBody = 'return stepNumber' + type.substr(index - 1, step.length + 1);
                stepBy       = new Function('stepNumber', funcBody);
            }
        });
    }
    if(!stepBy) {
        stepBy = function(stepNumber) {
            return ++stepNumber;
        }
    }
    for(var i = begin; i <= end; i = stepBy(i)) {
        arr.push(i);
    }
    return arr;
};
