import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    await connectDB();

    const existingSubscriber = await Subscriber.findOne({ email });
    
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    const subscriber = await Subscriber.create({ email });
    
    return NextResponse.json(
      { message: 'Successfully subscribed', subscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}