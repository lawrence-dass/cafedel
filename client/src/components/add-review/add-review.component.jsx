import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import ShopService from './../../apis/ShopService';
import {
  AddReviewContainer,
  AddReviewHeading,
  AddReviewBlock,
  NameInputContainer,
  NameInput,
  NameErrorMessage,
  NameErrorPlaceHolder,
  RatingInputContainer,
  RatingInput,
  ReviewTextInput,
  ReviewTextErrorMessage,
  ReviewTextErrorPlaceHolder,
  AddReviewButton,
} from './add-review.style';

const MySwal = withReactContent(Swal);

const AddReview = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });

  const location = useLocation();

  const onSubmitReview = async ({ name, rating, reviewText }, e) => {
    e.preventDefault();
    try {
      await ShopService.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      history.push('/');
      history.push(location.pathname);
      MySwal.fire(
        'Review added Successfully!',
        'Thank you for your contribution 🙏',
        'success'
      );
    } catch (err) {
      MySwal.fire(
        'Something went wrong with your request',
        'Please check your input and add details again 🙏',
        'error'
      );
    }
  };

  const AddReviewInputError = () => {
    return errors?.name ? (
      <NameErrorMessage>{errors?.name?.message}</NameErrorMessage>
    ) : (
      <NameErrorPlaceHolder />
    );
  };

  const AddReviewInputTextError = () => {
    return errors?.reviewText ? (
      <ReviewTextErrorMessage className="">
        {errors?.reviewText?.message}
      </ReviewTextErrorMessage>
    ) : (
      <ReviewTextErrorPlaceHolder />
    );
  };

  return (
    <AddReviewContainer>
      <AddReviewHeading>Add more reviews here...</AddReviewHeading>
      <form onSubmit={handleSubmit(onSubmitReview)}>
        <AddReviewBlock>
          <NameInputContainer>
            <NameInput
              ref={register({
                required: { value: true, message: 'Required field.' },
                minLength: { value: 6, message: 'Mininum 6 letters please.' },
                maxLength: { value: 20, message: 'Maximum 20 letters please.' },
              })}
            />
          </NameInputContainer>
          <div>
            <AddReviewInputError />
          </div>
          <RatingInputContainer>
            <RatingInput
              ref={register({
                required: { value: true, message: 'Required field.' },
              })}
            >
              <option disabled="true"> Rating </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </RatingInput>
          </RatingInputContainer>
        </AddReviewBlock>
        <ReviewTextInput
          ref={register({
            required: { value: true, message: 'Required field.' },
            minLength: { value: 6, message: 'Mininum 10 letters please.' },
            maxLength: { value: 200, message: 'Maximum 20 letters please.' },
          })}
        ></ReviewTextInput>
        <AddReviewInputTextError />
        <AddReviewButton>Submit</AddReviewButton>
      </form>
    </AddReviewContainer>
  );
};

export default AddReview;
