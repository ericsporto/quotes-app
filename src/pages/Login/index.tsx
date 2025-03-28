import { useNavigate } from 'react-router-dom';
import FranqLogo from '@assets/franq-logo.webp';
import { CustomInput } from '@components/Global/CustomInput';
import CustomButton from '@components/Global/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginFormValidator } from '@utils/schemas';
import { LoginForm } from '@interfaces/forms';
import { AuthCard } from '@components/Global/AuthCard';
import { useAuthStore } from '@stores/useUserStore';
import { useState } from 'react';
import { PageLoading } from '@components/PageLoading';

const FormField = () => {
  const navigate = useNavigate();
  const { login, setUser } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<LoginForm>(loginFormValidator),
  });

  const { email, password } = watch();

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      const success = login(email, password);

      if (success) {
        const loggedUser = JSON.parse(localStorage.getItem('user') || 'null');
        setUser(loggedUser);

        setTimeout(() => {
          setLoading(false);
          navigate('/home');
        }, 1500);
      } else {
        setLoading(false);
      }
    }, 1500);
  };

  const handleRedirect = () => navigate('/register');

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <PageLoading isLoading={loading} />
      <div className="flex w-full justify-center">
        <img
          src={FranqLogo}
          alt="Franq Logo"
          className="w-38 sm:w-40 lg:w-50"
        />
      </div>
      <p className="text-sm sm:text-lg lg:text-xl font-medium mt-8">
        Seja bem-vindo!
      </p>
      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 mt-2 mb-6">
        Faça login para acessar
      </p>
      <div className="w-full flex flex-col space-y-6 lg:space-y-7">
        <CustomInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          {...register('email')}
          error={errors.email?.message}
        />
        <CustomInput
          label="Senha"
          placeholder="Digite sua senha de acesso"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <p
        onClick={handleRedirect}
        className="text-sm lg:text-lg font-semibold text-secondary text-center underline mt-2 cursor-pointer"
      >
        Não possui conta? Cadastre-se.
      </p>
      <div className="mt-6 w-full">
        <CustomButton type="submit" children="Entrar" variant="primary" />
      </div>
    </form>
  );
};

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-[#B5BEF3] via-white to-[#FFFFFF] xs:px-5">
      <AuthCard>
        <FormField />
      </AuthCard>
    </div>
  );
}
