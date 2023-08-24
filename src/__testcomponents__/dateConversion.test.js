import { dateConvertIntoMiliSecond } from "../Utility/DateConversion";

it("Date conversion testing with actual date",()=>{
    expect(dateConvertIntoMiliSecond("2023/08/24")).toBe(1692815400000);
    
})