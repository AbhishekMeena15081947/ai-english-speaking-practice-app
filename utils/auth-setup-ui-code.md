# Supabase Authentication Setup Guide

This guide explains how to add Supabase authentication to your Next.js/React project. It covers installation, environment setup, initializing Supabase, UI components, AuthGuard for protected routes, and example pages for `/auth` and `/dashboard`.

---

## 1. Installation

```bash
npm install @supabase/supabase-js
```

---

## 2. Environment Variables Setup

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Tips:**
- Get these values from your [Supabase project settings](https://app.supabase.com/project/_/settings/api).
- Never commit secret keys to version control.

---

## 3. Initialize Supabase Client

Create `utils/supabaseClient.js`:

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## 4. AuthForm UI Component

Create `components/AuthForm.js`:

```jsx
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSignUp(evt) {
    evt.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Check your email for the confirmation link.');
    setLoading(false);
  }

  async function handleSignIn(evt) {
    evt.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Signed in! Redirecting...');
    setLoading(false);
  }

  return (
    <form>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button disabled={loading} onClick={handleSignIn}>Sign In</button>
      <button disabled={loading} onClick={handleSignUp}>Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

---

## 5. AuthGuard for Protected Routes

Create `components/AuthGuard.js`:

```jsx
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useRouter } from 'next/router';

export default function AuthGuard({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data: { session } }) => {
      if (!session) router.replace('/auth');
      else setUser(session.user);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) router.replace('/auth');
      else setUser(session.user);
    });
    return () => listener?.subscription.unsubscribe();
  }, [router]);

  if (!user) return <div>Loading...</div>;

  return <>{children}</>;
}
```

---

## 6. Sample pages/auth.js

```jsx
import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  return (
    <div>
      <h1>Sign In / Sign Up</h1>
      <AuthForm />
    </div>
  );
}
```

---

## 7. Sample pages/dashboard.js (Protected)

```jsx
import AuthGuard from '../components/AuthGuard';

export default function Dashboard() {
  return (
    <AuthGuard>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the protected dashboard!</p>
      </div>
    </AuthGuard>
  );
}
```

---

**You're ready!** Try navigating to `/auth` to sign in and `/dashboard` to check access protection.
