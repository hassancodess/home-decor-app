import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Group, ScrollView, YStack } from 'tamagui';
import { z } from 'zod';
import Button from '~/components/shared/Button';
import Input from '~/components/shared/Input';
import InputContainer from '~/components/shared/InputContainer';
import Text from '~/components/shared/Text';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const LoginPage = () => {
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
      dob: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'all',
    delayError: 1000,
  });
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  const navigateToSignUp = () => {
    router.navigate('/register');
  };

  const onSubmit = (data: any) => {
    router.navigate('(home)');
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1 }}>
        <YStack flex={1} paddingHorizontal="$4" justifyContent="space-between">
          <Group flex={1}>
            <YStack flex={1} gap="$8">
              <Group tag="top" gap="$1">
                <Text variant="heading">Welcome</Text>
                <Text variant="sub-heading">Please enter your details to proceed.</Text>
              </Group>

              <Group tag="inputs" gap="$5">
                <Group tag="email-input">
                  <Text variant="input-title">Email</Text>
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
                            onChangeText={(text) => {
                              const trimmedText = text.trim();
                              onChange(trimmedText);
                            }}
                            onBlur={onBlur}
                          />
                        </InputContainer>
                        {errors.email && <Text variant="error">{errors.email.message}</Text>}
                      </>
                    )}
                  />
                </Group>
                <Group tag="password-input">
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
                              <EyeOff size={'$1'} color={'$black'} opacity={0.8} />
                            ) : (
                              <Eye size={'$1'} color={'$black'} opacity={0.8} />
                            )}
                          </Pressable>
                        </InputContainer>
                        {errors.password && <Text variant="error">{errors.password.message}</Text>}
                      </>
                    )}
                  />
                </Group>
              </Group>

              <Group gap="$4">
                <Button onPress={handleSubmit(onSubmit)}>Login</Button>
                <Link href={'/(auth)/forgot-password'}>
                  <Text variant="titleSmall" centered>
                    Forgot Password?
                  </Text>
                </Link>
              </Group>
            </YStack>
          </Group>
          <Group>
            <Text centered>
              Don't have an Account?{' '}
              <Text variant="titleSmall" onPress={navigateToSignUp}>
                Sign Up
              </Text>
            </Text>
          </Group>
        </YStack>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
