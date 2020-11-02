const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// const adminRoutes = require('./routes/admin')
// const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const mongoConnect = require('./util/database')

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

//add user to req
app.use((req, res, next) => {
    //User.findByPk(1).then(user => {
    //     req.user = user;
    //     next();
    // })
    //     .catch(err => console.log(err))
})

//parse the req.body 
app.use('/', bodyParser.urlencoded({ extended: false }));

//serve fila statically 
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes.routes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect((client) => {
    console.log(client);
    app.listen(3000);
})
