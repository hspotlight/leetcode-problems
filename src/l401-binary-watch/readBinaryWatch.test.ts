
import { readBinaryWatch } from "./readBinaryWatch";

describe('readBinaryWatch', () => {
    it('should return "0:00" when given 0', () => {
        const result = readBinaryWatch(0)
        expect(result).toMatchObject(["0:00"]);
    });
    it('should return [] when given 1', () => {
        const result = readBinaryWatch(1)
        expect(result).toMatchObject([ "0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"])
    });
});