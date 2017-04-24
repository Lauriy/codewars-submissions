function HolidayPriorityQueue() {
    this.queue = [];
}

function comparisonFunction(a, b) {
    if (a.priority < b.priority) {
        return 1;
    } else if (b.priority > a.priority) {
        return -1;
    }

    return 0;
}

HolidayPriorityQueue.prototype.addGift = function (gift) {
    this.queue.push(gift);
    this.queue.sort(comparisonFunction);
    console.log(this.queue);

    return this.queue.length;
};

HolidayPriorityQueue.prototype.buyGift = function () {
    if (this.queue.length === 0) {
        return '';
    }

    return this.queue.pop().gift;
};