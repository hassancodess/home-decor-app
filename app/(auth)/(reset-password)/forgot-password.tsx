import React from 'react';
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

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
});

const ForgotPasswordPage = () => {
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
  const onSubmit = (data: any) => {
    console.log(data);
    router.navigate('/set-password');
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1 }}>
        <YStack flex={1} paddingHorizontal="$4" justifyContent="space-between">
          <Group flex={1}>
            <YStack flex={1} gap="$8">
              <Group tag="top" gap="$1">
                <Text variant="heading">Reset Password?</Text>
                <Text variant="sub-heading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{' '}
                </Text>
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
                            onChangeText={onChange}
                            onBlur={onBlur}
                          />
                        </InputContainer>
                        {errors.email && <Text variant="error">{errors.email.message}</Text>}
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

export default ForgotPasswordPage;
