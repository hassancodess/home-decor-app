import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Group, ScrollView, Spacer, YStack } from 'tamagui';
import InputContainer from '~/components/shared/InputContainer';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '~/components/shared/DateTimePicker';
import Button from '~/components/shared/Button';
import Text from '~/components/shared/Text';
import Input from '~/components/shared/Input';

const formSchema = z
  .object({
    name: z.string().min(7, 'name must be at least 7 characters'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
    dob: z
      .date()
      .min(new Date('1900-01-01'), { message: 'Too old' })
      .max(new Date('2006-01-01'), { message: 'Too young!' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const RegisterPage = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      dob: new Date(),
    },
    resolver: zodResolver(formSchema),
    mode: 'all',
    delayError: 1000,
  });

  const navigateToSignIn = () => {
    router.navigate('/login');
  };
  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView>
      <YStack paddingHorizontal="$4">
        <Spacer size="$4" />
        <Group tag="name-input" gap="$1">
          <Text variant="input-title">Name</Text>
          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputContainer>
                  <Input
                    padding={'$0'}
                    placeholder="John Doe"
                    flex={1}
                    autoCapitalize="none"
                    autoCorrect={false}
                    backgroundColor={'$beige'}
                    borderWidth={'$0'}
                    fontWeight={'$2'}
                    color={'$black'}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </InputContainer>
                {errors.name && (
                  <Text color={'$accent'} fontWeight={'$3'} fontSize={'$3'}>
                    {errors.name.message}
                  </Text>
                )}
              </>
            )}
          />
        </Group>
        <Spacer size="$4" />
        <Group tag="email-input" gap="$1">
          <Text variant="input-title">Email Address</Text>
          <Controller
            control={control}
            name={'email'}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputContainer>
                  <Input
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                </InputContainer>
                {errors.email && <Text variant="error">{errors.email.message}</Text>}
              </>
            )}
          />
        </Group>
        <Spacer size="$4" />
        <Group tag="password-input" gap="$1">
          <Text variant="input-title">Password</Text>
          <Controller
            control={control}
            name={'password'}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputContainer>
                  <Input
                    placeholder="* * * * * * * * *"
                    secureTextEntry={isPasswordVisible}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  <Pressable onPress={() => setIsPasswordVisible((prev) => !prev)}>
                    {isPasswordVisible ? (
                      <Eye size={'$1'} color={'$black'} opacity={0.8} />
                    ) : (
                      <EyeOff size={'$1'} color={'$black'} opacity={0.8} />
                    )}
                  </Pressable>
                </InputContainer>
                {errors.password && <Text variant="error">{errors.password.message}</Text>}
              </>
            )}
          />
        </Group>
        <Spacer size="$4" />
        <Group tag="confirm-password-input" gap="$1">
          <Text variant="input-title">Confirm Password</Text>
          <Controller
            control={control}
            name={'confirmPassword'}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputContainer>
                  <Input
                    placeholder="* * * * * * * * *"
                    secureTextEntry={isConfirmPasswordVisible}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  <Pressable onPress={() => setIsConfirmPasswordVisible((prev) => !prev)}>
                    {isConfirmPasswordVisible ? (
                      <Eye size={'$1'} color={'$black'} opacity={0.8} />
                    ) : (
                      <EyeOff size={'$1'} color={'$black'} opacity={0.8} />
                    )}
                  </Pressable>
                </InputContainer>
                {errors.confirmPassword && (
                  <Text variant="error">{errors.confirmPassword.message}</Text>
                )}
              </>
            )}
          />
        </Group>
        <Spacer size="$4" />

        <Group tag="confirm-password-input" gap="$1">
          <Text variant="input-title">Date of Birth</Text>
          <Controller
            control={control}
            name={'dob'}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <DateTimePicker
                  date={value}
                  type="date"
                  accentColor="red"
                  cancelText="Cancel"
                  confirmText="Confirm"
                  onChange={onChange}
                />
                {errors.dob && <Text variant="error">{errors.dob.message}</Text>}
              </>
            )}
          />
        </Group>
        <Spacer size="$6" />
        <Text centered alignSelf="center" width={'85%'}>
          By continuing, you agree <Text variant="titleSmall">Terms of Use</Text> and{' '}
          <Text variant="titleSmall">Privacy Policy.</Text>
        </Text>
        <Spacer size="$6" />
        <Group gap="$4">
          <Button onPress={handleSubmit(onSubmit)}>Register</Button>
          <Text centered>
            Already have an Account?{' '}
            <Text variant="titleSmall" onPress={navigateToSignIn}>
              Sign In
            </Text>
          </Text>
        </Group>
      </YStack>
    </ScrollView>
  );
};

export default RegisterPage;
