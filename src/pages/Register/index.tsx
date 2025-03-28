import { useNavigate } from 'react-router-dom';
import FranqLogo from '@assets/franq-logo.webp';
import { CustomInput } from '@components/Global/CustomInput';
import CustomButton from '@components/Global/CustomButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerFormValidator } from '@utils/schemas';
import { RegisterForm } from '@interfaces/forms';
import { AuthCard } from '@components/Global/AuthCard';
import { PageLoading } from '@components/PageLoading';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthStore } from '@stores/useUserStore';

const FormField = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<RegisterForm>(registerFormValidator),
  });

  const { email, name, password } = watch();

  const handleRegister = () => {
    const existingUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (existingUser && existingUser.email === email) {
      toast.warning('E-mail já está cadastrado');
      return;
    }
    setIsLoading(true);
    const hashedPassword = btoa(password);

    const newUser = { name, email, password: hashedPassword };

    localStorage.setItem('user', JSON.stringify(newUser));
    setUser({ name, email, password: hashedPassword });

    setTimeout(() => {
      setIsLoading(false);
      toast.success('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 1500);
  };

  const handleBack = () => navigate('/');

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <PageLoading isLoading={isLoading} />
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
        Faça o seu cadastro
      </p>
      <div className="w-full flex flex-col space-y-6 lg:space-y-7">
        <CustomInput
          label="Nome"
          placeholder="Digite seu e-mail"
          {...register('name')}
          error={errors.name?.message}
        />
        <CustomInput
          type="date"
          label="Data de nascimento"
          placeholder="Digite seu e-mail"
          {...register('birthDate')}
          error={errors.birthDate?.message}
        />
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
        <CustomInput
          label="Confirme sua senha"
          placeholder="Digite sua senha de acesso"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </div>
      <p
        onClick={handleBack}
        className="text-sm lg:text-lg font-semibold text-secondary text-center underline mt-2 cursor-pointer"
      >
        Já possuo uma conta
      </p>
      <div className="flex gap-6 mt-6 w-full">
        <CustomButton type="submit" children="Voltar" variant="secondary" />
        <CustomButton type="submit" children="Cadastrar" variant="primary" />
      </div>
    </form>
  );
};

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tr from-[#B5BEF3] via-white to-[#FFFFFF] xs:px-5">
      <AuthCard>
        <FormField />
      </AuthCard>
    </div>
  );
}
