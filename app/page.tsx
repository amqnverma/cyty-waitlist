import { SubscribeForm } from '@/components/subscribe-form';
import { Rocket, User, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { SlSocialInstagram,SlSocialTwitter,SlEnvolope , SlRocket, SlPeople, SlWallet } from "react-icons/sl";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className=" bg-gradient-to-b from-background to-secondary ">
      
      <div className="container min-h-screen p-4 mt-8">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto ">
            <img src="/cytylogo.png" alt="" className='h-16' />
            <h1 className="text-5xl max-md:text-3xl font-semibold     tracking-tight my-8 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Discover Hotels & connect directly with them.
            </h1>
          <p>Sign up for early access.</p>

          <div className="flex justify-center ">
            <SubscribeForm />
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
            <div className="flex flex-col  space-y-4 p-6 bg-card rounded-lg  border-2">
              <SlRocket className="h-6 w-6 text-primary" />
              <h3 className="text-md text-left">Fast, easy & safe check-in</h3>
              <p className="text-muted-foreground"></p>
            </div>

            <div className="flex flex-col space-y-4 p-6 bg-card rounded-lg border-2 ">
              <SlWallet className="h-6 w-6 text-primary" />
              <h3 className="text-md text-left">No Commission. What you pay, 100% goes to the Hotels.</h3>
              <p className="text-muted-foreground"></p>
            </div>

            <div className="flex flex-col space-y-4 p-6 bg-card rounded-lg border-2 ">
              <SlPeople className="h-6 w-6 text-primary" />
              <h3 className="text-md text-left">Get personalized and seamless experience.</h3>
            </div>
          </div>

          
        </div>
      </div>


      
    </main>
  );
}