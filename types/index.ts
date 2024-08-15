export type TOnboardingItem = {
  heading: string;
  image: string;
  description: string;
};

export type TProfile = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  avatarUrl: string;
};
