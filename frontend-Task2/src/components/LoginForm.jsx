import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be 6+ characters';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate aria-labelledby="login-modal-title">
      <h2 id="login-modal-title">Sign In</h2>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Addre ss</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'form-input--error' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          placeholder="you@example.com"
        />
        {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-input ${errors.password ? 'form-input--error' : ''}`}
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? 'password-error' : undefined}
          placeholder="Enter your password"
        />
        {errors.password && <p id="password-error" className="form-error" role="alert">{errors.password}</p>}
      </div>

      <button type="submit" className="btn-submit">Sign In</button>
      <p className="form-footer">Don't have an account? <a href="#signup">Create one</a></p>
    </form>
  );
}

export default LoginForm;
