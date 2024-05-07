/* eslint-disable prettier/prettier */
import express from 'express';
// import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';
import * as formCallsController from '../controllers/formcalls';

const router = express.Router();

//route to get all users
// router.get('', .getAllUsers);

//route to get lgas
router.get('/getlgasbyid/:id', formCallsController.getlgasbyId);
router.get('/getmemosbyid/:id/doc/:docId', formCallsController.getMemosById);
router.post('/createtrainee', formCallsController.createNewTrainee);
router.get('/Trainee', (req, res, next) => {
    console.log(res);
})

//route to get a single user by their user id
// router.get('/:_id', userAuth, userController.getUser);
export default router;
