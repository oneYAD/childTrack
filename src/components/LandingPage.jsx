import React, { useState } from 'react';
import { Bell, Shield, Brain, Eye, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Real-time Bullying Detection",
      description: "Advanced AI that monitors and alerts you of potential bullying incidents, keeping your child safe."
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "Learning Progress Tracking",
      description: "Track your child's daily activities and developmental milestones with detailed insights."
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      title: "Personalized Monitoring",
      description: "AI-powered system that focuses specifically on your child, providing tailored updates and alerts."
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-500" />,
      title: "Smart Alerts",
      description: "Receive instant notifications about important moments in your child's day."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Keep Your Child Safe and Thriving at Daycare
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered monitoring that watches over your child, detects potential issues, and tracks their development - all through your existing daycare camera system.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-green-50 border-green-200 text-green-800 p-4 rounded-lg">
                Thanks for joining! We'll notify you when we launch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  Join Waitlist
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Compatible with leading daycare camera systems</p>
          <div className="flex justify-center gap-8">
            <span className="text-gray-400 font-medium">WatchMeGrow</span>
            <span className="text-gray-400 font-medium">ChildView</span>
            <span className="text-gray-400 font-medium">LiveSchool</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;