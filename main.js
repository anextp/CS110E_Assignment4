const matUtil = require('./utils.js');

matrix1=[
    [1, 2, 3],
    [4, 5, 0],
    [15, -3, 6]
];

matrix2=[
    [10, 87, 0],
    [65, 4, 7],
    [-40, -37, 100]
];

matrix3= [
    [1, 2, 3],
    [4, 5, 6]
];

matrix4= [
    [7, 10],
    [8, 11],
    [9, 12]
];

matUtil.matrixproduct(matrix3,matrix4);
matUtil.matrixsum(matrix1,matrix2);
matUtil.rowsum(matrix1);