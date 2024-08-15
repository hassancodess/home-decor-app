import { create } from 'zustand';
import { TProfile } from '~/types';

interface ProfileState {
  profile: TProfile | null;
  setProfile: (profile: TProfile | null) => void;
}

const useProfileStore = create<ProfileState>()((set) => ({
  profile: null,
  setProfile: (profile) => set((state) => ({ profile })),
}));

export default useProfileStore;
