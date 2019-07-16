module.exports = function (data, topic) {
    this.searchInteger = function (data) {
        let number = data.replace(/[A-Za-z$-]/g, "");
        if (number === "") {
            throw new Error('No Number')
        }
        return number;
    }
};