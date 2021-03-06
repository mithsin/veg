
const Contact = require('../../models/Contact');

module.exports = (app) => {
  app.post('/api/newcontact', (req, res, next) => {
    Contact.create(req.body)
      .then(contact => res.json(contact))
      .catch((err) => next(err));
  });

  app.get('/api/allcontact', (req, res, next) => {
    Contact.find()
      .exec()
      .then((contact) => res.json(contact))
      .catch((err) => next(err));
  });
};
