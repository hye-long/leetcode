function expect(val) {
    return {
        toBe: function(expected) {
            if (val !== expected) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(notExpected) {
            if (val === notExpected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}