const faker = require('faker');
faker.locale = 'es_MX';
const fs = require('fs');
let writeStream = fs.createWriteStream('data.txt');




for (let i = 0; i < 500_000; i++) {
    writeStream.write(faker.lorem.lines(1));
    writeStream.on('finish', () => {
        console.log('wrote all data to file');
    });

// close the stream

}

writeStream.end();
