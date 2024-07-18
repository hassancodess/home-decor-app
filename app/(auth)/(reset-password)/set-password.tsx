import React, { useState } from 'react';
import { Group, ScrollView, YStack } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '~/components/shared/Text';
import { Controller, useForm } from 'react-hook-form';
import InputContainer from '~/components/shared/InputContainer';
import Input from '~/components/shared/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '~/components/shared/Button';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { Eye, EyeOff } from '@tamagui/lucide-icons';

const formSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
const SetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'all',
    delayError: 1000,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(true);
  const router = useRouter();
  const onSubmit = (data: any) => {
    console.log(data);
    router.navigate('/login');
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1 }}>
        <YStack flex={1} paddingHorizontal="$4" justifyContent="space-between">
          <Group flex={1}>
            <YStack flex={1} gap="$8">
              <Group tag="top" gap="$1">
                <Text variant="heading">Change The Password</Text>
                <Text variant="sub-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{' '}
                </Text>
              </Group>
              <Group tag="inputs" gap="$5">
                <Group tag="password-input" gap="$1">
                  <Text variant="input-title">New Password</Text>
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
                <Group tag="confirm-password-input" gap="$1">
                  <Text variant="input-title">Confirm New Password</Text>
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
              </Group>
              <Button onPress={handleSubmit(onSubmit)}>Next</Button>
            </YStack>
          </Group>
        </YStack>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SetPasswordPage;
