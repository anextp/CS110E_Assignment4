module.exports = {

    matrixsum: function (matrix1, matrix2){
    let sum = Array(matrix1.length).fill().map(()=>Array(matrix1[0].length).fill());

    for(i=0 ; i <= matrix1.length-1; i++)
        for(j=0; j<=matrix1[i].length -1; j++)
            sum[i][j]=matrix1[i][j]+matrix2[i][j];
            console.log(sum);
    },

    arraysum: function(array){
        let sum=0;
        for(let i=0; i<=array.length-1;i++)
            sum+=array[i];

        return sum;
    },

    rowsum: function(matrix){
        let sumarr=[];
        for( let i=0;i<= matrix.length-1; i++){
            sumarr[i]=this.arraysum(matrix[i]);
        }
        console.log(sumarr);
        return sumarr;
    },

    matrixproduct: function(matrix1, matrix2){
        
        let product = Array(matrix1.length).fill(0).map(()=>Array(matrix2[0].length).fill(0));
        for(let i=0;i<matrix1.length;i++){

        for(let j=0;j<matrix2[0].length;j++)
        for(let k=0; k<=matrix1[0].length-1;k++){

            product[i][j]+=matrix1[i][k]*matrix2[k][j];
            
        }
    }
        
        console.log(product);
        
    }
    
    }