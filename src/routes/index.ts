import userRouter from './user.route';
import uploadRouter from './upload.route';

function route(app: any)
{
    app.use('/users', userRouter);
    app.use('/uploads', uploadRouter);
}

export default route;