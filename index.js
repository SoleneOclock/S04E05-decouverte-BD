const express = require('express');
const fs = require('fs');
const glob = require('glob');

app = express();

app.set('view engine', 'pug');
app.use('/reveal', express.static(__dirname + '/node_modules/reveal.js/'));
app.use('/public', express.static('public'));
app.use('/slides', express.static('slides'));

app.get('/', (req, res) => {
  glob('**/*.md',{dot: false, cwd: 'slides/', nodir: true, ignore:['**/README.md']}, (err, files) => {
    if(err) {
      res.render('index', {slides: '/slides/demo.md' });
    }
    res.render('list', {list: files.map(file => file.replace(/\.[^/.]+$/, ''))});
  });
});

app.get('/:file([^.]+)', (req, res) => {
  const file = req.params.file;
  res.render('index', {slides: '/slides/' + file + '.md' });
});

app.listen(1234, () => console.log('Slides dispo : http://localhost:1234'));
