module.exports = {
        add: function (inputValue) {
                if (!inputValue) {
                        return 0;
                } else if (inputValue.indexOf(',') < 0) {
                        return parseInt(inputValue, 10);
                } else {
                        var inputValues = inputValue.split(',');
                        return inputValues.reduce(function (acc, val) {
                                return parseInt(acc, 10) + parseInt(val, 10);
                        });
                }
        },
};