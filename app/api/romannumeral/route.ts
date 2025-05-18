import { toRoman } from '@/lib/roman';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    
    console.log(`Converting: ${query}`); // Basic logging

    try {
        if (!query) throw new Error('Please enter a number');
        
        const number = parseInt(query);
        const roman = toRoman(number);
        
        return NextResponse.json({
            input: query,
            output: roman
        });
        
    } catch (error: any) {
        console.error('Conversion failed:', error.message);
        return NextResponse.json(
            { error: error.message },
            { status: 400 }
        );
    }
}