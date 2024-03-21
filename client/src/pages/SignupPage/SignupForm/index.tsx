import { baseURL } from 'api/apiHttp';
import FormInput from 'components/FormInput';
import { Button, LinkBtn } from 'components/ui/Button';
import SvgIcon from 'components/ui/SvgIcon';
import { H3 } from 'components/ui/Typography';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppExtraDispatch } from 'store';
import { registerThunk } from 'store/auth';
import { signupSchema } from 'utils/validation';
import { InferType } from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import s from './index.module.scss';

type TInput = InferType<typeof signupSchema>;

const inputFields = Object.keys(signupSchema.fields) as Array<keyof TInput>;

const SignupForm = () => {
  const dispatch = useAppExtraDispatch();
  const resolver: Resolver<TInput> = yupResolver(signupSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>({ mode: 'onChange', resolver });

  const onSubmit: SubmitHandler<TInput> = data => {
    dispatch(registerThunk(data))
      .unwrap() // .then(pld => setIsVM(!pld.result.user.verifiedEmail))
      .catch(err => toast.error(err.message));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.title__wrap}>
        <H3 className={s.title}>Sign Up</H3>
        <NavLink to={'/signin'} className={s.navlink}>
          Have an account?
        </NavLink>
      </div>

      {inputFields.map(el => (
        <FormInput
          key={el}
          inputName={el}
          errors={errors}
          register={register}
        />
      ))}

      <Button type="submit" variant="smooth" label="Submit" />

      <LinkBtn
        href={`${baseURL}/auth/google`}
        color="outlined"
        variant="smooth"
        label="Sign Up With"
      >
        <SvgIcon svgId="google" size={24} />
      </LinkBtn>
    </form>
  );
};

export default SignupForm;
