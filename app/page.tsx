import { SubscribeForm } from '@/components/subscribe-form';
import { Rocket, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { SlSocialInstagram,SlSocialTwitter,SlEnvolope , SlRocket, SlPeople, SlWallet } from "react-icons/sl";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary ">
      
      <div className='md:px-24 py-2 px-4 text-2xl flex justify-between   z-10 sticky top-0 overflow-hidden bg-white'>
        <img src="/cytylogo.png" alt="" className='h-12' />
        <div className='flex gap-4 items-center'>
        <Link href="https://www.instagram.com/cyty.in?igsh=Nnl2aXhzYjY3OTgx"><SlSocialInstagram/></Link>
        <Link href="https://x.com/bookcyty?t=SAcyea8hlWbUMceIgF2s7A&s=08"><SlSocialTwitter/></Link>
        
        </div>
      </div>

      <div className="container mx-auto p-4  ">
        <div className="flex flex-col items-center text-center space-y-0 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight">
            Discover Hotels & connect directly with them.
          </h1>
          <div className=" flex justify-center ">
            <SubscribeForm />
          </div>
          
          {/* <p className="text-xl text-muted-foreground">
            Be the first to experience a better way to book your stay.
          </p> */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0 ">
            <div className="flex flex-col items-center space-y-4 p-6 bg-card rounded-lg shadow-lg">
              <SlRocket className="h-12 w-12 text-primary" />
              <h3 className="text-xl ">Fast, easy & safe check-in</h3>
              <p className="text-muted-foreground"></p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-4 bg-card rounded-lg shadow-lg">
              <SlWallet className="h-12 w-12 text-primary" />
              <h3 className="text-xl ">No Commission. What you pay, 100% goes to the Hotels.</h3>
              <p className="text-muted-foreground"></p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-card rounded-lg shadow-lg">
              <SlPeople className="h-12 w-12 text-primary" />
              <h3 className="text-xl ">Get personalized and seamless experience.</h3>
              {/* <p className="text-muted-foreground">Join a community of early adopters and innovators.</p> */}
            </div>
          </div>

          

          {/* <div className="mx-auto mb-24 flex max-w-xl flex-col items-center gap-4 sm:flex-row ">
            <div className="relative flex-1 w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full flex-1 rounded-full border-2 border-gray-200 bg-white px-6 pr-36 transition-all hover:border-gray-300 focus:border-black focus:ring-0"
            />
            <Button className="absolute right-1 top-1 h-10 rounded-full px-4 bg-black text-white hover:bg-gray-800 transition-all">
              Join Waitlist
            </Button>
          </div>
        </div> */}

          {/* <div className='flex flex-col gap-2 '>
            <div className='flex gap-2 items-center bg-green-400'>
            <Rocket className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Fast, easy & safe check-in.</h3>
            </div>

            <div className='flex gap-2 items-center bg-green-400'>
            <Rocket className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold text-left">No Commission. What you pay, 100% goes to the Hotels.</h3>
            </div>

            <div className='flex gap-2 items-center'>
            <Rocket className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Get personalized and seamless experience.</h3>
            </div>
          </div> */}

          
        </div>
      </div>


      
    </main>
  );
}