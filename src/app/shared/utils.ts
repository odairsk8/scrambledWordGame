export class Utils {
    public static getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public static shuffleArray(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };
}

