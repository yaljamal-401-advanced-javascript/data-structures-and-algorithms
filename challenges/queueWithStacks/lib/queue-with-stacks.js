const Node=require('../lib/node.js');
class pseudoqueueu {
    constructor(stack){
        this.back=stack|| null;
    }
    enqueue(value){
        const node=new Node(value);
        this.node.next=this.back;
    }
    dequeue(){
        if(!this.back.next|| !this.back){
            this.back=null;
            return 'this is empty queue';
        }
        let current=this.back;
        while(current.next.next){   
                current=current.next;
        }
        let temp=current.next;
        current.next=null;
        return temo || 'empty queue';
    }
}
module.exports=pseudoqueueu;