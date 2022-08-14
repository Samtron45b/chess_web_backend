import userRouter from './user.route.js';
function route(app)
{
    app.use('/users', userRouter);
}

export default route;