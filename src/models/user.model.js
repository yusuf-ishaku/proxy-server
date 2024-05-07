import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    CourseOfferedId: {
      type: Number
    },
    NationalIdentityNumber: {
      type: Number
    },
    FirstName: {
      type: String
    },
    Surname: {
      type: String
    },
    OtherName: {
      type: String
    },
    PhoneNumber: {
      type: String | Number
    },
    EMailAddress: {
      type: String
    },
    MotherMaidenName: {
      type: String
    },
    Gender: {
      type: String
    },
    DateOfBirth: {
      type: String
    },
    LicenceTypeId: {
      type: String
    },
    BloodGroup: {
      type: Number | String
    },
    FacialMark: {
      type: String
    },
    Glasses: {
      type: String
    },
    Height: {
      type: Number | String
    },
    Disabilities: {
      type: String
    },
    TIN: {
      type: String | Number
    },
    NOKPhoneNumber: {
      type: String | Number
    },
    Country: {
      type: String | Number
    },
    StateOfOrigin: {
      type: String | Number
    },
    LGAOfOrigin: {
      type: String | Number
    },
    Address: {
      type: String
    },
    City: {
      type: String
    },
    StateOfResidence: {
      type: String | Number
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
