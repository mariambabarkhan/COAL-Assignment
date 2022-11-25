//data structures: map for instructions with functions, registers with sizes 
let regSize = new Map([
    ["AX", 16],["BX", 16],["CX", 16],["DX", 16],
    ["AH", 8],["BH", 8],["CH", 8],["DH", 8], //need 8 registers in total 
    ["AL", 8],["BL", 8],["CL", 8],["DL", 8],
]);

let instruction = new Map([
    ["mov1", function(){}], ["mov2", function(){}], ["mov3", function(){}],
    ["add", function(){}],["sub", function(){}],["mul", function(){}],
    ["inc", function(){}],["dec", function(){}],["and", function(){}], //need 2 more instructions 
    ["and", function(){}],["or", function(){}],["not", function(){}],
    ["xor", function(){}],["SHR", function(){}],["SHL", function(){}]
    ["cbw", function(){}],["", function(){}]
]);

let regVal = new Map([
    ["AX", 1],["BX", 2],["CX", 3],["DX", 4],
    ["AH", 5],["BH", 6],["CH", 7],["DH", 8],
    ["AL", 9],["BL", 10],["CL", 11],["DL", 12],
]);

let regOpcode = new Map([
    ["AX", 000],["BX", 011],["CX", 001],["DX", 010],
    ["AH", 100],["BH", 111],["CH", 101],["DH", 110],
    ["AL", 000],["BL", 011],["CL", 001],["DL", 010]
]);

let memOpcode = new Map([
    ["DS:[BX+SI]", 000],["DS:[BX+DI]", 001],["SS:[BP+SI]", 010],["SS:[BP+DI]", 011],
    ["DS:[SI]", 100],["DS:[DI]", 101],["SS:[BP]", 110],["DS:[BX]", 111]
]);

let instructionOpcode = new Map([
    ["mov1", 100010], ["mov2", 1100011], ["mov3", 1011],
    ["add", 000000],["sub", 000101],["mul", 1111011],["imul",1111011],
    ["inc", 1111111],["dec", 1111111],["neg", 1111011],
    ["and", 001000],["or", 000010],["not", 1111011],
    ["xor", 000110],["shl", 1101000],["shr", 1101000]
]);

let memory = new Map([
    [0, 1],[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1],
    [14, 1], [15, 1]
])

