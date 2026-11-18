# Irena | Hello, Recruiter! 👋

An interactive personal portfolio created as part of the **INFORCE Internship Project 2026**.

The project introduces me, highlights my technical skills and interests, and demonstrates my ability to build an interactive web application using HTML, CSS, and vanilla JavaScript.

The main interactive feature is a learning goals manager that allows users to create, track, filter, and delete goals while preserving their progress between browser sessions.

## Technologies Used

- **HTML5** - Semantic structure and accessible content.
- **CSS3** - Responsive layout, custom styling, and light/dark themes.
- **JavaScript (ES6+)** - Application logic, DOM manipulation, and event handling.
- **localStorage** - Persistent storage for learning goals and theme preferences.
- **Git & GitHub** - Version control and project management.

The project uses no JavaScript frameworks, external UI libraries, or build tools.

## Features

### Personal Portfolio

- Personal introduction and background.
- Technical skills and interests.
- Motivation for joining the INFORCE internship.
- Three initial learning goals, each with a concrete first step.
- Responsive design for desktop and mobile devices.
- Light and dark themes with persistent user preference.

### Interactive Learning Goals

- Add new learning goals.
- Validate empty and whitespace-only input.
- Prevent duplicate goals, ignoring capitalization and surrounding whitespace.
- Mark goals as completed or active.
- Delete goals with confirmation.
- Filter goals by **All**, **Active**, and **Completed**.
- Display the total number of goals, completed goals, and completion percentage.
- Automatically update statistics after changes.
- Save goals and completion statuses using `localStorage`.
- Display appropriate validation errors and empty-state messages.
- Safely render user-generated content as plain text.

## Getting Started

No installation or additional dependencies are required.

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

Alternatively, the application can be accessed through GitHub Pages.

## Project Structure

The project is organized into separate HTML, CSS, JavaScript, and asset files.

- `index.html` — Main page structure.
- `css/` — Application styles and responsive design.
- `js/` — Application logic, goal management, filtering, validation, and statistics.
- `assets/` — Images and other visual resources.
- `screenshots/` — Screenshots documenting manual tests.
- `TESTS.md` — Manual test scenarios and results.
- `README.md` — Project documentation.

The JavaScript functionality is separated into smaller modules to keep responsibilities clear and make the code easier to understand and maintain.

## Data Persistence

The application uses the browser's `localStorage` API to preserve learning goals, their completion statuses, and the selected theme.

When the application loads, previously saved data is restored. Changes to goals are saved so they remain available after reloading the page or reopening the application in the same browser.

No backend server or database is required.

## Testing

The application was manually tested to verify its core functionality, validation rules, persistence, and responsive behavior.

**Test results:**
- Total test cases: **16**
- Passed: **15**
- Failed: **0**

The tests cover goal creation, duplicate prevention, status changes, deletion confirmation, filtering, statistics, page reloads, theme persistence, safe text rendering, and mobile responsiveness.

Detailed test scenarios, expected results, actual results, and screenshots are documented in [TESTS.md](TESTS.md).

## Development Report

### Challenges and Solutions

**1. Managing application state**

One of the main challenges was keeping the displayed goals, active filters, and progress statistics synchronized.

I addressed this by organizing the application logic into separate functions responsible for updating and rendering the interface.

**2. Data persistence**

Ensuring that goals and their completion statuses remained consistent after reloading the page required careful handling of `localStorage`.

I implemented data saving and restoration and verified the behavior through manual testing.

**3. Input validation**

Preventing empty and duplicate goals required normalizing user input before validation.

I used whitespace trimming and case-insensitive comparisons to ensure consistent behavior.

**4. Responsive design**

Creating a layout that works across different screen sizes required adjustments to spacing, typography, and component positioning.

I tested the interface at desktop and mobile viewport sizes and refined the CSS accordingly.

### Unfinished Features

All required features have been implemented and tested successfully.

No known issues remain at the time of submission.

## Tools, Resources, and AI Assistance

The project was developed using:

- A code editor for writing and organizing the source code.
- Git and GitHub for version control.
- Browser Developer Tools for debugging and responsive testing.
- Official web documentation and learning resources for reference.
- ChatGPT - for code review, troubleshooting, and documentation.

### AI Usage Disclosure

ChatGPT was used to discuss implementation approaches, clarify JavaScript concepts, review code, troubleshoot issues, and assist with planning test scenarios and documentation.

The application code was written and integrated manually. AI suggestions were reviewed, adapted where necessary, and verified through browser testing.

The final implementation and its behavior were checked against the assignment requirements.

## Final Notes

This project represents my approach to learning through practical implementation, problem-solving, and continuous improvement.

It was built with a focus on functionality, readable code, and understanding the underlying technologies rather than relying on frameworks or unnecessary dependencies.

---

**INFORCE Internship Project · 2026**

*Created by Irena Daneva*