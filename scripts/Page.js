import { Header } from 'Header';
import { Footer } from 'Footer';

class Page {

    pageSize;
    header = new Header;

    constructor(width, height) {
        this.pageSize = [width, height];
    }


}

export default { Page }