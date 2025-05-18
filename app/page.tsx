'use client';
import { useState } from 'react';
import { Provider, defaultTheme, Grid, View, Heading, TextField, Button, Divider, Text, Well, Content, Flex } from '@adobe/react-spectrum';

export default function RomanConverter() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleConvert = async () => {
        setError('');
        setResult('');
        
        try {
            const response = await fetch(`/api/romannumeral?query=${number}`);
            const data = await response.json();
            
            if (response.ok) {
                setResult(data.output);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to connect to server');
            console.error('API error:', err);
        }
    };

    return (
        <Provider theme={defaultTheme} colorScheme="light">
            <Grid
                areas={['header', 'content']}
                columns={['1fr']}
                rows={['size-400', 'auto']}
                gap="size-100"
                width="size-4600"
                margin="size-400"
            >
                <View gridArea="header">
                    <Heading level={1} marginBottom="size-200">
                        Roman Numeral Converter
                    </Heading>
                </View>
                
                <Flex  direction="column" width="size-3000" gap="size-100">
                    <Content>
                        <TextField
                            label="Enter a number (1-3999)"
                            type="number"
                            value={number}
                            onChange={setNumber}
                            width="size-2400"
                            marginBottom="size-200"
                            isRequired
                        />
                        
                        <Button
                            variant="primary"
                            onPress={handleConvert}
                            marginBottom="size-200"
                        >
                            Convert to Roman
                        </Button>
                        
                        <Divider size="M" marginY="size-100" />
                        
                        {result && (
                            <Well>
                                <Text>
                                    <strong>Roman Numeral:</strong> {result}
                                </Text>
                            </Well>
                        )}
                        
                        {error && (
                            <Well>
                                <Text>
                                    <strong>Error:</strong> {error}
                                </Text>
                            </Well>
                        )}
                    </Content>
                </Flex>
            </Grid>
        </Provider>
    );
}