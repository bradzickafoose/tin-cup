import React from 'react';

export default function Form() {
  const handleSubmit = event => {
    // TODO: add submit function for email newsletter
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        aria-label="Email"
        placeholder={`your.email@example.com`}
      />
      <button type="submit">
        Get Access
      </button>
    </form>
  );
}
