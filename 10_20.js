 
var poker=[];
for(var i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            poker.push("紅心"+(parseInt(i%13)+1));
            break;
        case 1:
            poker.push("方塊"+(parseInt(i%13)+1));
            break;
        case 2:
            poker.push("黑桃"+(parseInt(i%13)+1));
            break;
        case 3:
            poker.push("梅花"+(parseInt(i%13)+1));
    }
   
}
console.log(poker.toString());
var a=[], b=[], c=[],d=[];

for (let i = 0; i < poker.length; ) {
    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player1.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player2.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player3.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    console.log(poker[rand]);
    player4.push(poker[rand]);
    poker.splice(rand,1);
    
}
 