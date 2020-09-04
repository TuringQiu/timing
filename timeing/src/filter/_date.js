function _newDate(date) {
  let nDate = date;

  if (!!nDate) {
    this.date = new Date(nDate);
  } else {
    this.date = new Date();
  }

  this.getYear = function() {
    return this.date.getFullYear();
  };

  this.getDate = (method) => {
    let year = this.date.getFullYear(),
      month =
        this.date.getMonth() < 10
          ? `0${this.date.getMonth() + 1}`
          : this.date.getMonth,
      day =
        this.date.getDate() < 10
          ? `0${this.date.getDate()}`
          : this.date.getDate,
      hour = this.date.getHours(),
      minutes = this.date.getMinutes();

    if (method == "Date") {
      return `${year}-${month}-${day}`;
    } else {
      return `${year}-${month}-${day} ${hour}:${minutes}`;
    }
  };

  this.getDiff = function() {
    let diff;
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        //返回今天和传入日期之间的日期差
        diff = Math.ceil(
          Math.abs(
            new Date(arguments[0].toString()).getTime() - this.date.getTime()
          ) / 86400000
        );
        break;
      case 2:
        //返回两个入参的相差的天数
        diff = Math.ceil(
          Math.abs(
            new Date(arguments[0].toString()).getTime() -
              new Date(arguments[1].toString()).getTime()
          ) / 86400000
        );
        break;
    }
    return diff;
  };

  return this;
}

module.exports = _newDate;
