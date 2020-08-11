const db = require('./index');


const adj = ['Custom', 'Slinky', 'Luthier-Made', 'Standard', 'Bronze', 'Gold', 'Copper', 'Dynamic', 'Vintage'];

const guitarCategory = ['Guitars'];
const drumsCategory = ['Drums'];
const micsCategory = ['Pro Audio'];
const otherCategory = ['Effects', 'Amplifiers'];
const keyboardCategory = ['Keyboards'];

const guitar = ['Acoustic Guitar', 'Electric Guitar'];
const drums = ['Acoustic Drums', 'Electronic Drums'];
const mics = ['Microphone', 'Portable Recorder'];
const other = ['Guitar Combos', 'Modeling Amps'];
const keyboard = ['Acoustic Piano', 'Electric Piano'];

const guitarBrands = ['Fender', 'Martin', 'Taylor'];
const drumsBrands = ['Yamaha', 'Ludwig', 'Pearl'];
const micsBrands = ['Sony', 'Tascam', 'Zoom'];
const otherBrands = ['Yamaha', 'Fender', 'Boss Katana'];
const keyboardBrands = ['Yamaha', 'Kawai', 'Fender', 'Rhodes'];


let instrumentsArray = [];

const guitarRandomizer = () => {
  for (let i = 0; i < 20; i++) {
    let instrument = {};
    instrument.name = adj[Math.floor(Math.random() * adj.length)] + " " + guitarBrands[Math.floor(Math.random() * guitarBrands.length)] + " " + guitar[Math.floor(Math.random() * guitar.length)];
    instrument.category = guitarCategory[Math.floor(Math.random() * guitarCategory.length)];
    instrument.image = `https://reverbimages.s3-us-west-1.amazonaws.com/guitar/guitar${Math.floor(Math.random() * 10)}.jpg`;
    instrumentsArray.push(instrument);
  }
};

const drumsRandomizer = () => {
  for (let i = 0; i < 20; i++) {
    let instrument = {};
    instrument.name = adj[Math.floor(Math.random() * adj.length)] + " " + drumsBrands[Math.floor(Math.random() * drumsBrands.length)] + " " + drums[Math.floor(Math.random() * drums.length)];
    instrument.category = drumsCategory[Math.floor(Math.random() * drumsCategory.length)];
    instrument.image = `https://reverbimages.s3-us-west-1.amazonaws.com/Drums/drums${Math.floor(Math.random() * 10)}.jpg`;
    instrumentsArray.push(instrument);
  }
};

const micsRandomizer = () => {
  for (let i = 0; i < 20; i++) {
    let instrument = {};
    instrument.name = adj[Math.floor(Math.random() * adj.length)] + " " + micsBrands[Math.floor(Math.random() * micsBrands.length)] + " " + mics[Math.floor(Math.random() * mics.length)];
    instrument.category = micsCategory[Math.floor(Math.random() * micsCategory.length)];
    instrument.image = `https://reverbimages.s3-us-west-1.amazonaws.com/recording+gear+images/mic${Math.floor(Math.random() * 10)}.jpg`;
    instrumentsArray.push(instrument);
  }
};

const otherRandomizer = () => {
  for (let i = 0; i < 20; i++) {
    let instrument = {};
    instrument.name = adj[Math.floor(Math.random() * adj.length)] + " " + otherBrands[Math.floor(Math.random() * otherBrands.length)] + " " + other[Math.floor(Math.random() * other.length)];
    instrument.category = otherCategory[Math.floor(Math.random() * otherCategory.length)];
    instrument.image = `https://reverbimages.s3-us-west-1.amazonaws.com/amps/amps${Math.floor(Math.random() * 10)}.jpg`;
    instrumentsArray.push(instrument);
  }
};

const keyboardRandomizer = () => {
  for (let i = 0; i < 20; i++) {
    let instrument = {};
    instrument.name = adj[Math.floor(Math.random() * adj.length)] + " " + keyboardBrands[Math.floor(Math.random() * keyboardBrands.length)] + " " + keyboard[Math.floor(Math.random() * keyboard.length)];
    instrument.category = keyboardCategory[Math.floor(Math.random() * keyboardCategory.length)];
    instrument.image = `https://reverbimages.s3-us-west-1.amazonaws.com/pianos/piano${Math.floor(Math.random() * 10)}.jpg`;
    instrumentsArray.push(instrument);
  }
};

const seed = () => {
  guitarRandomizer();
  drumsRandomizer();
  micsRandomizer();
  otherRandomizer();
  keyboardRandomizer();

  for (let i = 0; i < instrumentsArray.length; i++) {
    let {name, category, image} = instrumentsArray[i];
    let quantity = Math.floor(Math.random() * 500);
    let price = Math.random() * 1000;
    db.query(`INSERT INTO instruments (name, category, price, quantity, image) VALUES ("${name}", "${category}", ${price}, ${quantity}, "${image}")`, (err) => {
      if(err) {
        console.log('seeding failed');
      }
    });
  }
}

seed();
db.end();