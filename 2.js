function segitiga1(tinggi){
    var output=''
    for(let i=0;i<tinggi;i++){
        for(let j=i;j<tinggi;j++){
            output+=' '
        }
        for(let k=1;k<=i;k++){
            output+='*'
        }
        for(let l=0;l<=i;l++){
            output+='*'
        }
        output+='\n'
    }
    console.log(output)
}
segitiga1(5)

