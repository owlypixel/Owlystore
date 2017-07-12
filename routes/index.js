const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const owl = {name: "OWLY", age: 13, bool: true};
	// res.json(owl);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
  	name: 'OWL',
  	age: req.query.age
  });
});

router.get('/reversed/:name', (req, res) => {
	let reverse = [...req.params.name].reverse().join('');
	res.send(reverse);
});

module.exports = router;
