import { v4 as uuidV4} from 'uuid';

export class BaseElement {
    public id: string;

    constructor() {
        this.id = uuidV4();
    }
}