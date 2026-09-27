let count = 0;

const interval = setInterval(() => {
    count++;

    console.log(count);

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

const timer = setTimeout(() => {
    console.log("Hello");
}, 7000);