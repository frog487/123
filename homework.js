12 var Floor=[];
for(i-0;i<=100;i++)f
Floor[i]=i;
console.log(Floor[i]+"樓");
16
20
28
var currentFloor = 5; //index value of floorName
var targetFloor; //B2 -> index:1
while(true)//無窮道圈
//輸入欲達樓層
targetFloor= readline.question('目前在'+floorName[currentFloor+樓·請要去那一層樓?;
//判斷樓層是否合理
//餐floorName.indexof(取出素引值,若為-1代表無此樓層
targetFloor = targetFloor.touppercase();
targetFloor = floorName.index0f(targetFloor);//義成整數
//if(isNaN(targetFloor)|| targetFloor<bottom || targetFloor>top)f
if(targetFloor<8)f
//console.10g("請輸人个於“+f1oorName[bottom+“到“+floorame[top]+"之間的楼層名稱!");
console.10g("請輸入介於“+floorName.tostring()+“之間的樓層名稱!”);
continue;
if(targetFloor==currentFloor){
setTimeout(()=>console.1og("暫停5秒離開電梯”),5000)
break;
}else{