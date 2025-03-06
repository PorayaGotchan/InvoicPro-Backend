const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', controller.findAllInvoicpro);
    app.post('/create-Invoicpro', controller.createInvoicpro);
    app.get('/Invoicpro/:id', controller.findInvoicproById);
    app.put('/update-Invoicpro/:id', controller.updateInvoicproById);
    app.delete('/delete-user/:id', controller.deleteInvoicproById);
};