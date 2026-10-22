
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CITIES } from '@/lib/constants';

export default function FiltersScreen() {
  const params = useLocalSearchParams<{
    city?: string;
    sort?: string;
  }>();

  const [selected, setSelected] = useState(params.city ?? '');
  const [sort, setSort] = useState(params.sort ?? 'none');

  function apply() {
    // router.dismissTo({
    //   pathname: '/',
    //   params: {
    //     ...(selected ? { city: selected } : {}),
    //     ...(sort !== 'none' ? { sort } : {}),
    //   },
    // });
    router.dismissTo({
      pathname: '/',
      params: {
        ...(selected ? { city: selected } : {}),
        sort,
      },
    });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>City</Text>

      <View style={styles.chips}>
        {['', ...CITIES].map((city) => (
          <Pressable
            key={city || 'all'}
            style={[
              styles.chip,
              selected === city && styles.chipSelected,
            ]}
            onPress={() => setSelected(city)}
          >
            <Text
              style={[
                styles.chipText,
                selected === city && styles.chipTextSelected,
              ]}
            >
              {city || 'All cities'}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Sort by price</Text>

      <View style={styles.sortOptions}>
        {[
          { label: 'Default', value: 'none' },
          { label: 'Low to high', value: 'asc' },
          { label: 'High to low', value: 'desc' },
        ].map((option) => (
          <Pressable
            key={option.value}
            style={[
              styles.chip,
              sort === option.value && styles.chipSelected,
            ]}
            onPress={() => setSort(option.value)}
          >
            <Text
              style={[
                styles.chipText,
                sort === option.value && styles.chipTextSelected,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable style={styles.apply} onPress={apply}>
        <Text style={styles.applyText}>Show homes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  chipSelected: {
    backgroundColor: '#0E4D92',
    borderColor: '#0E4D92',
  },
  chipText: {
    color: '#374151',
  },
  chipTextSelected: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  apply: {
    backgroundColor: '#0E4D92',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
