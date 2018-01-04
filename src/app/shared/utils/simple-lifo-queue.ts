import {Node} from './node'

export class SimpleLifoQueue {

    private head: Node = undefined;
    size: number = 0;

    enqueue(item: any) {
        let newNode = { next: this.head, item: item };
        this.head.next = newNode;
        this.size++;
    }

    dequeue(){
        let item = this.head.item;
        this.head = this.head.next;
        this.size--;
        return item;
    }

}

