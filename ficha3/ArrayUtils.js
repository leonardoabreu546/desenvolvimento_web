module.exports = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    max: function (array) {
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },

    min: function (array) {
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },

    average: function (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
        
    },

    indexOf: function (array, value) {
        var index = -1;
        for (var i = 0; i < array.length; i++) {
            if (value==array[i]) {
                index = i;
            }
        }
        return index;
    },

    subArray: function (array, start, end) {
        var sarray = [];
        for (var i = start; i <= end; i++) {
            sarray.push(array[i]);
        }
        return sarray;
    },

    isSamelength : function (a1, a2) {
        return a1.length == a2.length;
    },

    reverse: function (array) {
        var rarray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            rarray.push(array[i]);
        return rarray;
        }
    },

    swap: function (array, i1, i2) {
        var temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
    }

}