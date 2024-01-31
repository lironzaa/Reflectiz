import { InputError } from "../../../shared/interfaces/input-error";

export const LandingFormErrorsData: {
  fullName: InputError[],
  gender: InputError[],
  email: InputError[],
  birthDate: InputError[],
  address: InputError[],
  city: InputError[],
  country: InputError[],
  hobbies: InputError[],
  favoriteColor: InputError[],
  seatsAmount: InputError[],
  motorType: InputError[],
} = {
  fullName:
    [
      {
        errorName: 'required',
        errorMessage: 'Full name is required',
      },
      {
        errorName: 'minlength',
        errorMessage: 'Full name must be at least 2 characters',
      }
    ],
  gender:
    [
      {
        errorName: 'required',
        errorMessage: 'Gender is required',
      }
    ],
  email:
    [
      {
        errorName: 'required',
        errorMessage: 'Email is required',
      },
      {
        errorName: 'pattern',
        errorMessage: 'Email format is invalid',
      }
    ],
  birthDate:
    [
      {
        errorName: 'required',
        errorMessage: 'Birth date is required',
      }
    ],
  address:
    [
      {
        errorName: 'required',
        errorMessage: 'Address is required',
      }
    ],
  city:
    [
      {
        errorName: 'required',
        errorMessage: 'City is required',
      }
    ],
  country:
    [
      {
        errorName: 'required',
        errorMessage: 'Country is required',
      }
    ],
  hobbies:
    [
      {
        errorName: 'required',
        errorMessage: 'Hobbies are required',
      }
    ],
  favoriteColor:
    [
      {
        errorName: 'required',
        errorMessage: 'Favorite Color is required',
      }
    ],
  seatsAmount:
    [
      {
        errorName: 'required',
        errorMessage: 'Seats amount is required',
      }
    ],
  motorType:
    [
      {
        errorName: 'required',
        errorMessage: 'Motor Type is required',
      }
    ],
}
