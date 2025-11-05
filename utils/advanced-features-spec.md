# Advanced Features Specification

## 1. Profile Picture Upload

### UI Flow:
- Support drag & drop and click-to-upload (from file system or camera)
- Example: Use [`react-dropzone`](https://react-dropzone.js.org/) for drag/drop, [`react-webcam`](https://github.com/mdn/web-dictaphone) for camera capture
- Display avatar preview before upload.

### Backend Integration:
- Store/profile images on Supabase Storage ([Supabase JS docs](https://supabase.com/docs/reference/javascript/storage))
- Validate file types (JPEG, PNG) and size on upload

### Display:
- Show avatar on dashboard, profile, nav bar, etc.
- Update UI reactively via state management (`useState`, Redux, etc.)

---

## 2. Advanced Dashboard Analytics

### Visual Tools:
- Charts: [`react-chartjs-2`](https://react-chartjs-2.js.org/) or [`D3.js`](https://d3js.org/)
- Session Duration, Skill Radar, Streak Chart, etc.

### Widgets:
- Session summary popup after every session
- Interactive graphs (hover details, clickable points)

### Implementation Tips:
- Fetch analytics data from backend (Supabase tables/REST API)
- Merge chart widgets with modular dashboard layout (e.g., [`react-grid-layout`](https://github.com/react-grid-layout/react-grid-layout))
- Responsiveness: Use Tailwind (`flex`, `grid`)

---

## 3. Personalized Notifications

### Channels:
- Email reminders: Triggered via Supabase functions or Firebase Cloud Functions
- In-app pop-up notifications: Use [`react-toastify`](https://github.com/fkhadra/react-toastify) or custom modal
- Push notifications (mobile/PWA): Integrate [`web-push`](https://github.com/web-push-libs/web-push) or [`firebase-messaging`](https://firebase.google.com/docs/cloud-messaging)

### Scenarios:
- Practice streak reminders
- Upcoming goals
- Session time reminders

### Integration Tips:
- Store notification preferences in user profile table
- Use cron jobs (Supabase Edge Functions, Firebase Scheduler) for timed triggers
---

## 4. Consistency Tracking (LeetCode Style)

### UI Features:
- Calendar heatmap: [`react-calendar-heatmap`](https://github.com/wa0x6e/cal-heatmap)
- Streak widget: Progress bar or days counter
- Achievement badges: Use icons & tooltips for milestones (practice streaks, analytics goals)

### Data Structure:
- Track daily usage in a `user_activity` table (date, streak_count)
- Calculate streaks & badge eligibility on backend (Supabase SQL/functions)

### Example Workflow:
1. On session end: update `user_activity` table
2. Recompute streak and badges
3. Push UI updates and notifications

---

## Implementation Notes
- Libraries: See links above
- Use environment/config variables for API keys/storage buckets
- Test uploads and analytics with mock data before going live
- Keep UI snappy with loading skeletons and instant feedback

---

## References
- [Supabase Functions/Storage](https://supabase.com/docs/guides/functions)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [Chart.js](https://www.chartjs.org/), [D3.js](https://d3js.org/), [react-toastify](https://github.com/fkhadra/react-toastify)
- [react-calendar-heatmap](https://github.com/wa0x6e/cal-heatmap)

---

**Ready for developer implementation.**
