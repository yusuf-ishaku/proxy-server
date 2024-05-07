/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import axios from 'axios';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getlgasbyId = async (req, res, next) => {
  const sendData = new FormData();
  sendData.append('StateId', req.params.id);
  console.log('entered');
  try {
    const data = await axios.post(
      // eslint-disable-next-line max-len
      'http://dssp.frsc.gov.ng/DrivingSchoolRegistration/GetLGAsSelectByStateId',
      sendData,
      {
        headers: {
          // eslint-disable-next-line max-len
          Cookie: `__RequestVerificationToken=JLcUJlOz8Yb2_F57_BSro_SD41t8oBv0ihGAlswcHEn2Btdj0DL76jXvA8ScrjmmjWxPI_Ty4n9ewFwi1Je8LB65ers1; ASP.NET_SessionId=uwh4ocyv2edwcy1jmvmtijwk; .AspNet.ApplicationCookie=6q5B7d-6eWinIjHgt6JrTKyh5tRRA-F1qALqUzV3-v31hcTJWKqZbhgmRS7TU-A74y1kLNRAe7i5x5mSzIKJWOnmgwq4r7M8S_7V6jtZZQUWUwBEUyVIVToigdRpnCD6Zl3nNSZVVzvMkHx0pvIcfLsJ33u374tEtbpi4Y25xK3Nvzw3HYs-e7d7kf5w9CncVGHjdS_EmjDwc0rrg_SkH1H5h5mmvUh--tR6nO7ipAAFMDzOD_nnACFTyEiLbeUsOAfcIC11S-qXi8xLkOuctfqBMPRHZBAffuDA5Aj1_E0Qi1PkZmngC07JijoUdAYnv9TjZdP_QU9rxksxk5BBfR3S0dFMUAD36OfL0y5hbvCf6Qn4Er-cXjCMxIM9sMAZXa2JlBHs68DyCXG8KaPd9PHrS130lTod57rLC7JOGNuUws7YTYPb_RzrHqp8oVMlni9UeMI9R0BaGNlV4W_CfJuw4lX7jMMEbWZE77x8EHUF9mqJV6106kVebLmdmkSzVXyR0V24gvR7_JyawD37pB9bCT4`
        }
      }
    );
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data.data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getMemosById = async (req, res, next) => {
  console.log('entered');
  console.log(req.body);
  try {
    const data = await axios.get(
      // eslint-disable-next-line max-len
      `https://cbnlnxcorrespondencesignaturedev.azurewebsites.net/memo/${req.params.id}`
    );
    const memoInFocus = data.data.data.filter((x) => req.params.docId === x.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: memoInFocus[0],
      message: 'All users fetched successfully'
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * Controller to add new trainee to database
 * @param {object} req - request
 * @param {object} res -response
 * @param {Function} next
 */
export const createNewTrainee = async (req, res, next) => {
  console.log('entered');
  console.log(req.body);
  let sendData = new FormData();
  if(req.body){
    for (const key in req.body){
      console.log(key, req.body[key]);
      sendData.append(key, req.body[key]);
    }
  }
  try {
    const data = await axios.post(
      'https://dssp.frsc.gov.ng/Trainee/Enroll',
      sendData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Cookie: `.AspNet.ApplicationCookie=Pnf8xLzMTRQdY_JgAz_3vw5FQSSnv8QEZR8lkZ-iob6v41nQ5lnbi1_Bj-iy8E3jwhLmn9O96o7mYA1QquiV7ywFExVEEy6Ar-ThJoVW59OV9Ve2MAGqnrlh0D6AQt1TMJUaGYIN7v2GDatcFcXeL_4A77ZJZhK8oyvE3I1M4-sjARtS9zwBX71W14Ly_iXpDWWX8QTvCwI_U0nRTNyjq-eTTet3gVZXdwRLkN60HXHqMCT8Y07CqB6sM3BElWM0aaD8PcIBdtQ7LvLrCMQS8iTjO5UmiOUwXP9AhzhDhiSk9PkmRgu_3fRvsn94mpp9iZYTwBDXAMqPTtcdqbJmrG_6qio0yrcqmrM3aAeQXgmBNhduwVDZkgQFP8jn1z0FhnOLzx4rthVQD1ecfAnTvVtl25mIiIwcJ9x1C9Nehz5U7lG3vy4jI--uhj3LHn6I0rGTOzCU-vgF8aogKV3OQrpKNrL5VBG4uVnvHnzAcgTxJBQDNEjmkEgSlNJPnn7JjBTsHas5-1LNhXVghqfK37ZjPso`,
          Accept: '*/*',
         'Accept-Encoding': 'gzip, deflate, br',
         Conection: 'keep-alive',
          // eslint-disable-next-line max-len
          // Cookie: `__RequestVerificationToken=JLcUJlOz8Yb2_F57_BSro_SD41t8oBv0ihGAlswcHEn2Btdj0DL76jXvA8ScrjmmjWxPI_Ty4n9ewFwi1Je8LB65ers1; ASP.NET_SessionId=uwh4ocyv2edwcy1jmvmtijwk; .AspNet.ApplicationCookie=WTGsgavXGXZ_MPsu7T7ZzY0zeM-MCoB44G7d-r2DG2XLFVjXEuReizBi66eXfklhVn384GBq96gDkdUVr9BkkggdRN2aZZVGzu8U682Uu1p7rtmG29qmwDzeUx4q0yDKAKkhtHbanM9FKx--KNF9gKBplyXaeKOVKjYjRsqDPb7xWV5aaKIuHvCntkp6EzXYCvHjUolkXVyGrRl39CJPLKG9sRnCdZxqmpWVrJiWeWh78M-kYtPz7rihu3fpBmPI9RrH74dUCG4eO_PP5yQJ3z8zityxfvOEIIv9cPEjjSlU43xFjkegV9huEx5iUq4mMbED4YBijK-yo-kZ96Op4bu0vpIHfmNCHpoH-L90bylKDLP4IVCuGM4Px3bre2TdZMV8qldyhnBtqyVckbXJuQEj7_sVX6Tn_cNNN3nzpLJXHqXur-nmc172T6h-Y1Zq60bzprYPWHQWxY3mMMWYRXLOv5FO8YIuDpI5Fi9RZr1ZHPyP6CFNFdd_LCLoOJoZG7iF6H4sraPtLGi61AUhys7CvL8`
          Cookie: `__RequestVerificationToken=SFn3sU2O5Gpngi4XLSjvSoYUULv4d9ePNFhQNbSp-Ous7mTsM2MYCT3lXO2Dlf-5MORnbMUutqIUge6OuA04a-l36C41; ASP.NET_SessionId=ia3dqrmgxmxu1cyw5k0ipdqv; .AspNet.ApplicationCookie=Q7H0CDOjFDvgF_Um4CxGRxk04dAN8j4zz87yKjF-S6BTKdaojuG-iWyoPRGiFmtX8UWaL5OqArlk10ijLGMTJ88kLtq3TLAxugBGMSGPoURkTYD-qeG-8xvR5jKKFalXuBLzO6ppATCps-XY0IX3Q-tlnyiSZwkxSThSbzEXf-IruUwzdMvoVH3urvs-McmW0Gd99rjTWPntRDXEEhCN1zqXB6uUrv9Fx3-jydHcRnOiXo8Tyl7tLme42-lmbzMEMWWRJ01yTCzMfDRoiyhw4RSp-dIDUk-X6mA-SsU2bYRMrV2o5TVjFpqnqrjhVQ3-qWwtu-WFvIddjUQUeHXbUQ-zZK_8XfCKIik40QLyQIoEIDWqi1w1SRTObtG-wOtblljr952I5P2YTFywahQsJhnQxTW6zybJey2p8ntSmoSWbMb2-fanzBpWDqHM8yuU_ZowSl4YcM1BlM226xCpoVEAH4LPSJcJNL70L2Cp9ER8jG6ATO2PprQADoPiLttTgOLkGuY7qrohAAAmurGXaSpE0xo`
        }
      }
    );
    console.log(data);
    if(data) {
      return res.status(HttpStatus.CREATED).json({
        message: 'Trainee added successfully',
        data: ''
      })
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
