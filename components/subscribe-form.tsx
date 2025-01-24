'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User,Mail } from 'lucide-react';


import Link from 'next/link';
import { SlSocialInstagram,SlSocialTwitter,SlEnvolope , SlRocket, SlPeople, SlWallet } from "react-icons/sl";

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [name, setName] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      toast({
        title: 'Success!',
        description: 'You have been added to the waitlist.',
      });
      setEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to subscribe',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full p-0 max-w-xl items-center md:space-x-1 gap-2 mt-4 mb-10 md:mb-0">
        <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-gray-200 border-2 w-96 placeholder:text-gray-500 max-md:h-14 "
            required
          />
        <Button
          type="submit"
          className="w-full bg-black max-md:h-14 text-white  hover:text-base transition-all duration-200 "
        >
          <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            Join the waitlist
          </span>
        </Button>

        <div className='w-full max-w-md flex justify-center gap-16 px-4 my-4'>
            <Link href="https://www.instagram.com/cyty.in?igsh=Nnl2aXhzYjY3OTgx">
            <div className='flex gap-4 items-center'>
              <SlSocialInstagram className='text-4xl'/>
              <div className='text-left'>
                <h1>Instagram</h1>
                <h1>@bookcyty</h1>
              </div>
            </div>
            </Link>
            
            <Link href="https://www.instagram.com/cyty.in?igsh=Nnl2aXhzYjY3OTgx">
            <div className='flex gap-4 items-center'>
              <SlSocialTwitter className='text-4xl'/>
              <div className='text-left'>
                <h1>Twitter</h1>
                <h1>@bookcyty</h1>
              </div>
            </div>
            </Link>


        </div>
    </form>
  );
}