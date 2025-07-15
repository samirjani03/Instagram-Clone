import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log to console to check if component is mounting
  console.log('App component is rendering');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Phone number, username, or email is required.';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate login process
      setTimeout(() => {
        setIsLoading(false);
        alert('Login simulation - This is a clone for demonstration purposes');
      }, 1000);
    }
  };

  const handleFacebookLogin = () => {
    alert('Facebook login simulation - This is a clone for demonstration purposes');
  };

  return (
    <div className="min-h-screen bg-instagram-light-gray flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Main Login Container */}
        <div className="bg-white border border-instagram-border rounded-sm p-10 mb-2">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-8">
            <h1 className="instagram-logo">
              Instagram
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Username Input */}
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Phone number, username, or email"
                className={`w-full px-2 py-2 text-sm bg-instagram-light-gray border rounded-sm focus:outline-none focus:border-instagram-gray ${
                  errors.username ? 'border-red-500' : 'border-instagram-border'
                }`}
                aria-label="Phone number, username, or email"
                aria-describedby={errors.username ? 'username-error' : undefined}
              />
              {errors.username && (
                <p id="username-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full px-2 py-2 text-sm bg-instagram-light-gray border rounded-sm focus:outline-none focus:border-instagram-gray ${
                  errors.password ? 'border-red-500' : 'border-instagram-border'
                }`}
                aria-label="Password"
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              {errors.password && (
                <p id="password-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-instagram-blue text-white text-sm font-semibold py-2 px-4 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-1 border-t border-instagram-border"></div>
            <span className="px-4 text-sm text-instagram-gray font-semibold">OR</span>
            <div className="flex-1 border-t border-instagram-border"></div>
          </div>

          {/* Facebook Login */}
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center space-x-2 text-facebook-blue text-sm font-semibold py-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Log in with Facebook</span>
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-instagram-link-blue">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="bg-white border border-instagram-border rounded-sm p-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-instagram-blue font-semibold">
              Sign up
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center space-x-4 text-xs text-instagram-gray mb-4">
            <a href="#" className="hover:underline">Meta</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">API</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Top accounts</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Instagram Lite</a>
            <a href="#" className="hover:underline">Threads</a>
          </div>
          <div className="flex justify-center items-center space-x-4 text-xs text-instagram-gray">
            <select className="bg-transparent border-none text-instagram-gray">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="pt">Português</option>
            </select>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;