const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const subscriptionRouter = require('./routes/subscriptions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/subscriptions', subscriptionRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
