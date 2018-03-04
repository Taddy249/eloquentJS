function chessBoard(){
  let firstString = " # # # #";
  let secondString = "# # # # ";
  for(let i = 1; i <= 8; i++){
    if(i % 2 == 0){
      console.log(secondString);
    }else{
      console.log(firstString);
    }
  }
}
