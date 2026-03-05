import React, { useState } from 'react';
// Koristimo direktan uvoz iz istog foldera
import { Button } from './Button'; 
import { Input } from './Input';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-xl w-[400px]">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Sign in</h2>
      <div className="flex flex-col gap-4">
        <Input 
          label="Email" 
          placeholder="your@email.ch" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          label="Login to Dashboard" 
          className="mt-4 w-full" 
          onClick={() => alert('Swiss Bridge Login!')}
        />
      </div>
    </div>
  );
};