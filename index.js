const validateMark = (mark) => {
    return typeof mark === "number" && !isNaN(mark) && mark >= 0 && mark <= 100;
};

function calculateAverage(marksArray) {}
