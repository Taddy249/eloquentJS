function chessBoard(n){
  let firstString = " # # # #";
  let secondString = "# # # # ";
  for(let i = 1; i <= n; i++){
    if(i % 2 == 0){
      console.log(secondString);
    }else{
      console.log(firstString);
    }
  }
}
