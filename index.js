const express = require('express');
const SymSpell = require('node-symspell');

const app = express();
const port = 3000;

app.use(express.text());

// Initialize SymSpell
(async () => {
  const maxEditDistance = 0;
  const prefixLength = 7;
  const symSpell = new SymSpell(maxEditDistance, prefixLength);
  const dictionaryPath = './node_modules/node-symspell/dictionaries/frequency_dictionary_en_82_765.txt';

  await symSpell.loadDictionary(dictionaryPath, 0, 1);

  app.set("symSpell", symSpell);
})();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/word-segmentation', async (req, res) => {
  const symSpell = app.get("symSpell");
  
  const text = req.body;

  try {
    const result = symSpell.wordSegmentation(text);
    res.send({ result, error: null });
  } catch (e) {
    console.error(e);
    res.send({ result: null, error: e.message });
    return;
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
