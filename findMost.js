// 找出数组中重复数字最多的一个，以及重复次数
function findMost(arr){
  var obj={}
  for(var i=0;i<arr.length;i+=1){
    if(!obj[arr[i]]){
      obj[arr[i]]=1
    }else{
      obj[arr[i]]+=1;
    }
  }
  var objs=Object.keys(obj);
  var maxNum=0,maxEle
  console.log(Object.keys(obj))
  for(var j=0;j<objs.length;j+=1){
    if(obj[objs[j]]>maxNum){
      maxNum=obj[objs[j]]
      maxEle=objs[j]
    }
  }
  return{maxNum,maxEle}
}
