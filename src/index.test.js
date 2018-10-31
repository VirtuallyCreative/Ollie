import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('index.html', () => {
  //Scaffold dom to regular document object
  before(function() {
    return JSDOM.fromFile('src/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });
    })
  // Start 'it should' assertion like normal...
  it('should include h1 that says Users', (done) => {
        expect(document.getElementsByTagName('h1')[0].innerHTML).to.equal("Users");
        done();
        window.close();
    })
})

