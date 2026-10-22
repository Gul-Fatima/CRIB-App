import { useFavourites } from '@/hooks/use-favourites';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  const { data: favourites = [] } = useFavourites();
  const savedCount = favourites.length;

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="magnifyingglass" md="search" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="heart.fill" md="favorite" />
        {savedCount > 0 && <NativeTabs.Trigger.Badge>{String(savedCount)}</NativeTabs.Trigger.Badge>}
      </NativeTabs.Trigger>
      {/* <NativeTabs.Trigger name="saved"
        badge={savedCount > 0 ? String(savedCount) : undefined}
      >
        <Label>Saved</Label>
        <Icon sf="heart" />
      </NativeTabs.Trigger> */}

      {/* "profile" is a folder with its own Stack: a stack inside a tab */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
