
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function ContactHostScreen() {
    const { title } = useLocalSearchParams<{ title: string }>();
    const [message, setMessage] = useState('');

    function handleSend() {
        router.back();
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Contact Host</Text>

            <Text style={styles.title}>
                Property: {title}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Type your message"
                value={message}
                onChangeText={setMessage}
                multiline
            />

            <Pressable
                style={styles.button}
                onPress={handleSend}
            >
                <Text style={styles.buttonText}>Send</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        gap: 16,
        backgroundColor: '#FFFFFF',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
    },
    title: {
        fontSize: 16,
        color: '#374151',
    },
    input: {
        minHeight: 120,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        textAlignVertical: 'top',
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
