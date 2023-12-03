export class Number {
    /**
     * Returns true if the value passed is an integer, false otherwise.
     * @param number A numeric value.
     */
    static isInteger(number: unknown): boolean {
        if (
            typeof number !== "number" ||
            isNaN(number) ||
            number === Infinity ||
            number === -Infinity
        )
            return false
        return number === Math.round(number)
    }
    /**
     * Returns true if the value passed is an NaN, false otherwise.
     * @param number A numeric value.
     */
    static isNaN(number: unknown): boolean {
        return isNaN(number as number)
    }
    /**
     * The boolean value true if the given value is a number that is a safe integer. Otherwise false.
     * @param The value to be tested for being a safe integer.
     */
    static isSafeInteger(number: unknown): boolean {
        return (
            number >= -(2 ** 53 - 1) &&
            number <= 2 ** 53 - 1 &&
            typeof number === "number" &&
            number === Math.round(number)
        )
    }
}
