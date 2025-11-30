import React, { useState } from 'react';
import { X, Lock, User, ArrowRight } from 'lucide-react';
import Button from './Button';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call authentication delay
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-100">
            <Lock className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Client Portal</h2>
          <p className="text-slate-500 text-sm mt-1">Sign in to view your weekly attendance reports</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-400"
                placeholder="manager@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all placeholder:text-slate-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Forgot password?
            </a>
          </div>

          <Button fullWidth type="submit" disabled={isLoading} className="mt-6">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Authenticating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Secure Login <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" />
            256-bit SSL Encrypted Connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
