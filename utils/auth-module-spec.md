# Authentication Module Specification (`auth-module-spec.md`)

## 1. Overview
All users must sign in or sign up before accessing any application feature. User accounts support email/password and social login (Google/Microsoft), with a dedicated account and dashboard per user.

## 2. User Authentication Workflow
- **Access Restriction:** Any attempt to use app features redirects to sign in/sign up modal or route.
- **Sign Up:**
  - Email & password required
  - Optional: Social login (Google/Microsoft)
  - Optional: Upload profile image
- **Sign In:**
  - Via email & password or with social login
- **Session:**
  - Secure session token/stored cookie, auto-login if valid
- **Error Handling:**
  - Friendly error messages for invalid credentials, signup issues, or 3rd party login failures

## 3. Account Creation & Management
- **Fields:** Email (unique, validated), password (secure, minimum requirements), display name, optional photo
- **Email Verification:** Optionally require verification (recommended for security)
- **Password Reset:** User-initiated reset via email
- **Social Providers:** Google, Microsoft (OAuth2)

## 4. Account Dashboard (`/dashboard`)
Upon sign-in, user is routed to the dashboard featuring:
- **Saved Practice Sessions** (history, resume option)
- **Analytics:** Streaks, progress tracking, usage stats
- **Audio Recordings:** All user recordings (with play/download option)
- **Profile:** Edit details, change password, manage linked accounts

## 5. Security & Privacy
- **Password Storage:** Use cryptographic salt & hash functions (e.g., bcrypt)
- **Secure Data Storage:** Store user data in secure cloud backend (Supabase, Firebase, or Auth0).
- **Session Security:** Use HttpOnly, Secure cookies/token storage for authentication
- **Data Privacy:** User data access controlled by authentication/authorization rules
- **Best Practices:** Adhere to GDPR/privacy standards where possible

## 6. Integration Points
- **Frontend:**
  - Modal or `/auth` route for all authentication flows
  - Dashboard at `/dashboard`, accessible only when authenticated
- **Backend:**
  - API endpoints for sign in, sign up, password reset, session validation
  - OAuth2 integration (Google/Microsoft)
  - Use Supabase/Firebase/Auth0 SDKs as required
- **Error Handling:**
  - Show clear error messages (invalid credentials, account exist, password too weak, provider errors)
  - Log errors for audit (without leaking user info)

## 7. Implementation Suggestions
- Use Supabase/Firebase/Auth0 for authentication and user management
- Use React context/provider for auth states on frontend
- Enforce protected routes and session invalidation on logout

## 8. References
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Auth0 Auth Docs](https://auth0.com/docs/authenticate)
