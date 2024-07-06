'use client'

import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DownloadCard from "./ui/DownloadCard";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, subject, message } = formData;
    setIsFormValid(name.trim() !== '' && email.trim() !== '' && subject.trim() !== '' && message.trim() !== '');
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''
          );
      setMessageSent(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container max-w-5xl mx-auto grid grid-cols-2 gap-24 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24 p-6 md:p-10">
      <div className="space-y-6">
        <div className="space-y-[2vh]">
          <h1 className="text-4xl font-black font-belsey">Contact 📞</h1>
          <p className="text-muted-foreground">
            If you're interested in reaching out to me, please feel free to fill up the form below. 
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full" disabled={!isFormValid}>
            Submit
          </Button>
          {messageSent && <p className="text-green-500 mt-2">Message sent!</p>}
        </form>
      </div>
      <div className="relative md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent rounded-lg" />
        <div className="relative h-full flex items-center justify-center rounded-lg">
          <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: `url('/resume/RESUME_KANG_MING.png')` }} />
          <div className="relative z-10">
            <DownloadCard fileUrl='/resume/RESUME_KANG_MING.pdf' />
          </div>
        </div>
      </div>
    </div>
  );
}