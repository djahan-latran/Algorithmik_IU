/*Erstellen Sie eine rekursive Version der nachstehenden iterativen JavaScript-Funktion, 
die jedes Zeichen eines gegebenen Strings in Großbuchstaben umwandelt. 
Erweitern Sie dann Ihr Hauptprogramm um Ausgabeanweisungen, die zweifelsfrei belegen, 
dass beide Varianten zum selben Ergebnis führen. 
Stellen Sie den Output Ihres Programms für den Input-String „Advanced Algorithmics“ dar.*/

let capIter = function (s1) {
    if (s1.length>0) {
      let r = "";
      for (let i=0; i<s1.length; i++){
        r = r + s1[i].toUpperCase();
      }
      return r;
    }
  }

let capRec = (s1,counter=0,capString="") => {
  if (s1.length > 0) {
      if (counter === s1.length) {
          return capString
      } else {
          capString = capString + s1[counter].toUpperCase();
          return capRec(s1,counter+1,capString)
      }
  }
}
console.log(capRec(s1="Advanced Algorithms"));
console.log(capIter("Advanced Algorithms"));
  