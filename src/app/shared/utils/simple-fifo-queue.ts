import {Node} from './node'

export class SimpleFifoQueue {

    private head: Node = undefined;
    private tail: Node = undefined;
    size: number = 0;

    enqueue(item: any) {
        if(!this.head){
            let newNode = { next: this.tail, item: item };
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            let newNode = { next: this.tail, item: item };
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.tail)
        {
            let item = this.tail.item;
            this.tail = this.tail.next;
            this.size--;
            return item;
        }
        return undefined;
    }

}

