const name = ["milkybar","diarymilk","eclairs","polo"];
let name1 = 0;
let name2 ;
longestindex() ;
    function longestindex(){
      for (let i=0; i < name.length; i++){
      if (name[i].length>name1)
      {
        name1 = name[i].length;
        name2 = name[i];
      }
      
    }
}
console.log(name2);
console.log ("index number: " +  name.indexOf(name2));