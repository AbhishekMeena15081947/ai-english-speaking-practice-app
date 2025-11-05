# Feature Section Tabs Specification

## Overview
This document outlines the UI/UX layout and component structure for implementing two distinct practice sections in the AI English Speaking Practice App: **Group Discussion Practice** and **Interview Practice**. Each section will have its own dedicated tab, navigation route, and optimized user experience.

---

## Dashboard Layout

### Navigation Structure

#### Primary Tab Navigation
- **Location**: Top-level navigation bar (below header)
- **Components**: Two primary tabs
  1. **Group Discussion Practice** (`/practice/group-discussion`)
  2. **Interview Practice** (`/practice/interview`)
- **Active State**: Visual indicator (underline, highlight, or color change) on the selected tab
- **Default Route**: Load "Group Discussion Practice" on app initialization

---

## Section 1: Group Discussion Practice

### Entry Point
- **Route**: `/practice/group-discussion`
- **Tab Label**: "Group Discussion Practice"
- **Icon**: Users/people icon (recommended)

### Layout Components

#### Header Section
- **Title**: "Group Discussion Practice"
- **Subtitle**: "Engage in real-time conversations with AI and practice collaborative speaking"
- **Action Button**: "Start New Discussion" (prominent CTA)

#### Main Content Area

**Section A: Active Discussion Panel**
- **Video/Audio Feed**: Display of current discussion with AI participants
- **Participant List**: Show active participants (user + AI avatars)
- **Real-time Transcript**: Scrollable transcript of conversation with speaker identification
- **Timer Display**: Session duration and remaining time

**Section B: Discussion Topics Carousel**
- **Description**: Pre-populated list of curated discussion topics
- **Topic Cards** containing:
  - Topic title
  - Difficulty level (Beginner, Intermediate, Advanced)
  - Estimated duration (5, 10, 15 minutes)
  - Number of AI participants
  - Quick-start button

**Section C: History & Analytics Panel**
- **Location**: Right sidebar or collapsible panel
- **Contents**:
  - Recent discussions (last 5-10 sessions)
  - Total discussion time (aggregate)
  - Most practiced topics
  - Performance metrics (fluency, clarity, confidence scores)
  - Average speaking duration per session

### User Experience Flow

1. **Initiate Discussion**
   - User clicks "Start New Discussion"
   - Modal/dialog opens with topic selection
   - User selects difficulty level and number of participants
   - Discussion room initializes with AI participants

2. **During Discussion**
   - Real-time speech recognition displays transcript
   - AI responds contextually
   - Visual feedback for speaking duration and quality
   - Option to pause/resume or end session

3. **Post-Discussion**
   - Session summary screen showing:
     - Total speaking time
     - Number of turns/exchanges
     - Fluency and clarity scores
     - Key phrases used
   - Option to save/bookmark discussion
   - Option to start new discussion or switch to Interview Practice

### Feedback & Analytics Integration

**Real-time Feedback**
- Speaking time counter
- Filler word detection (uh, um, like, etc.)
- Pronunciation quality indicators
- Pace/speed warnings

**Post-Session Analytics**
- Confidence score (0-100)
- Fluency rating
- Clarity assessment
- Grammar accuracy
- Vocabulary complexity analysis
- Comparison to previous sessions (trend chart)
- Recommendations for improvement

**Data Persistence**
- Store session duration, topics, and scores in user profile
- Display historical data (7-day, 30-day, all-time trends)
- Export session data (PDF report)

---

## Section 2: Interview Practice

### Entry Point
- **Route**: `/practice/interview`
- **Tab Label**: "Interview Practice"
- **Icon**: Briefcase icon (recommended)

### Layout Components

#### Header Section
- **Title**: "Interview Practice"
- **Subtitle**: "Prepare for real interviews with realistic scenarios and professional feedback"
- **Action Button**: "Start Interview Session" (prominent CTA)

#### Main Content Area

**Section A: Interview Session Panel**
- **Interviewer Avatar**: Professional AI interviewer persona
- **Video Feed**: Simulate video interview environment
- **Question Display**: Current interview question shown clearly
- **Answer Input**: Real-time transcription of user's responses
- **Time Tracker**: Question timer and session time remaining

**Section B: Interview Templates/Types Selector**
- **Description**: Pre-configured interview scenarios
- **Template Cards** containing:
  - Interview type (Behavioral, Technical, Situational, etc.)
  - Industry/Role focus (e.g., Software Engineer, HR Manager, Sales)
  - Difficulty level (Entry-level, Mid-level, Senior)
  - Estimated duration
  - Number of questions
  - One-click start button

**Section C: Progress & Performance Panel**
- **Location**: Right sidebar or collapsible panel
- **Contents**:
  - Current question number (e.g., "Question 2 of 5")
  - Progress bar
  - Session elapsed time
  - Quick stats (average response time, speaking duration)
  - Performance rating (live updating)

### User Experience Flow

1. **Select Interview Type**
   - User clicks "Start Interview Session"
   - Modal displays interview templates
   - User selects industry/role, difficulty level
   - System loads interview scenario

2. **Interview Session**
   - AI interviewer introduces themselves
   - First question displayed
   - User responds via microphone
   - Speech-to-text captures response
   - AI evaluates and provides feedback (subtle indicators)
   - Next question loads
   - Repeat for all interview questions

3. **Post-Interview**
   - Comprehensive results screen showing:
     - Overall performance score (0-100)
     - Interview completion time
     - Response time analysis per question
     - Speaking duration per response
     - Strengths highlighted (strong answers, vocabulary, confidence)
     - Areas for improvement
     - Detailed feedback per question
   - Option to review transcript with AI feedback
   - Option to retake same interview or select new template

### Feedback & Analytics Integration

**Real-time Indicators**
- Response time (how quickly user starts answering)
- Speaking time per question
- Confidence indicators (tone, pace analysis)
- Completeness score (did user fully address the question)

**Post-Interview Analytics**
- Overall interview score breakdown:
  - Communication (30%)
  - Content Quality (30%)
  - Confidence (20%)
  - Technical Accuracy (20%)
- Per-question feedback:
  - Relevance of response
  - Keywords identified
  - Suggested alternative responses
  - STAR method compliance (if applicable)
- Comparative analytics:
  - Performance trends across interview types
  - Weak areas to focus on
  - Progress tracking (interview-to-interview improvements)

**Data Storage**
- Save all interview sessions with full transcripts
- Store scores and feedback
- Enable historical comparison ("vs. 2 weeks ago")
- Generate downloadable interview preparation report

---

## Cross-Section Components

### Tab Switching Behavior
- **Seamless Transition**: Switching between tabs should save session state
- **Session Persistence**: If user is in middle of a discussion/interview, switching tabs and returning should restore the session (with warning)
- **Visual Continuity**: Both sections use consistent design language and styling

### User Profile Integration
- **Unified Dashboard**: Home page shows stats from both sections
- **Progress Tracking**: Combined learning metrics and achievements
- **Profile Settings**: Unified user preferences apply to both sections

### Navigation Controls
- **Breadcrumb Navigation**: Show current location in app hierarchy
- **Back Button**: Return to previous section/view
- **Home Link**: Quick access to main dashboard

---

## Responsive Design Considerations

### Desktop View (1024px+)
- Side-by-side layout with main content + sidebar analytics
- Full video/audio preview
- Expandable panels for detailed analytics

### Tablet View (768px - 1023px)
- Main content area with collapsible analytics panel
- Stacked components if needed
- Touch-friendly button sizing (48px minimum)

### Mobile View (<768px)
- Full-width main content
- Analytics accessible via bottom sheet or modal
- Stack all components vertically
- Simplified transcript display

---

## Accessibility Requirements

- **WCAG 2.1 AA Compliance**: All interactive elements must be accessible
- **Keyboard Navigation**: Full tab-based navigation between sections
- **Screen Reader Support**: Proper ARIA labels on all interactive components
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Captions**: Real-time and post-session transcripts for hearing-impaired users

---

## Developer Implementation Guide

### Routing Structure
```
/practice
├── /group-discussion (default)
│   ├── /group-discussion/new
│   ├── /group-discussion/session/:id
│   └── /group-discussion/history
├── /interview
│   ├── /interview/new
│   ├── /interview/session/:id
│   └── /interview/history
```

### Component Structure
```
PracticeApp
├── TabNavigation
│   ├── GroupDiscussionTab
│   └── InterviewTab
├── GroupDiscussionSection
│   ├── DiscussionHeader
│   ├── SessionPanel
│   ├── TopicsCarousel
│   └── AnalyticsPanel
└── InterviewSection
    ├── InterviewHeader
    ├── InterviewSessionPanel
    ├── TemplateSelector
    └── PerformancePanel
```

### State Management
- Use Redux/Context API to manage active tab and session state
- Store session data in local state and persist to backend
- Maintain user analytics in centralized store

### API Integration Points
- `POST /api/sessions/group-discussion/start` - Initialize discussion
- `POST /api/sessions/interview/start` - Initialize interview
- `PUT /api/sessions/:id/end` - End session and save results
- `GET /api/user/analytics` - Retrieve user performance data
- `GET /api/templates/interview` - Fetch interview templates
- `GET /api/topics/discussion` - Fetch discussion topics

---

## Version History
- **v1.0** (2025-11-05): Initial specification for Group Discussion and Interview Practice sections
