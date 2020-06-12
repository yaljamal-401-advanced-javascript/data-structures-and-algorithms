/* eslint-disable no-undef */
class AnimalShelter{
  constructor(){
    this.data=[];
  }

  enqueue(animal){
    if(animal){
      if(animal.type==='dog'||animal.type==='cat'){
        this.data.push(animal);
      }else {
        return 'this just for dogs and cats';
      }
    }else {
      return 'plz enter your animal';
    }
  }
  dequeue(pref){
    if(pref){
      if(pref.type==='dog'||pref.type==='cat'){
        while(this.data!==0){
          this.peek();
          if(this.peek().name===pref.name && this.peek().type===pref.type) {
            return this.peek();
          }else{
            this.data.shift();
          }
        }
      }else{
        return 'null';
      }
    }else{
      return 'plz enter your proffered animal';
    }
  }
  peek(){
    return this.data[0];
  }
}
module.exports=AnimalShelter;


