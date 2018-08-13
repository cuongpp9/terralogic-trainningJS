import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';



// describe('Out frist test', ()=>{
//     it('Should pass', ()=>{
//         console.log(courseValue);
//         expect(courseValue).to.equal("$1,000.00");
//     });
// });

describe('Out frist test', ()=>{
    it('Should pass', ()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html', ()=>{
    it('Should say h1 Users', (done)=>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        })
    });
});
