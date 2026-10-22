
import { CITIES } from '@/data/properties';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function SearchScreen() {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    function handleSearch() {
        const searchCity = city.trim().toLowerCase();

        const matchedCity = CITIES.find(
            (item) => item.toLowerCase() === searchCity
        );

        if (!matchedCity) {
            setError('Please enter Karachi, Lahore or Islamabad.');
            return;
        }

        setError('');
        router.navigate({
            pathname: '/',
            params: { city: matchedCity },
        });
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Search by City</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter city name"
                value={city}
                onChangeText={setCity}
                autoCapitalize="none"
            />

            {error ? (
                <Text style={styles.error}>{error}</Text>
            ) : null}

            <Pressable
                style={styles.button}
                onPress={handleSearch}
            >
                <Text style={styles.buttonText}>Search</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        gap: 16,
        backgroundColor: '#F9FAFB',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111827',
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#FFFFFF',
    },
    error: {
        color: '#DC2626',
    },
    button: {
        backgroundColor: '#0E4D92',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
