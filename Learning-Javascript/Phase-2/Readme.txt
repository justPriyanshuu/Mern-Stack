Simple JavaScript Digital Clock with Alarm

This project displays a live digital clock and lets you set an alarm that triggers a visual alert when the current time matches the alarm time.

How It Works

1. Clock Display
   - The clock updates every second using setInterval().
   - It gets the current time using JavaScript's Date object.
   - The time is formatted in 12-hour format with AM/PM.
   - The formatted time is shown inside an HTML element with the id "time".

2. Setting an Alarm
   - There is an input field where you enter the alarm time in HH:mm 24-hour format.
   - When you click the "Set Alarm" button, the alarm time is saved.

3. Alarm Trigger
   - Every second, the clock checks if the current time (hours and minutes) matches the alarm time.
   - If it matches:
     - The alarm time is reset (to avoid repeated alerts).
     - A simple alert box pops up saying "Alarm Ringing!" (or you can customize this).

Key Code Parts

- setInterval() to update the clock every second.
- alarmTime variable to store the alarm time set by the user.
- Event listener on the "Set Alarm" button to capture the user input.
- Comparison of current time and alarm time to trigger the alert.

How to Use

1. Open the page in a browser.
2. Watch the digital clock update every second.
3. Enter the alarm time in 24-hour format (e.g., 14:30 for 2:30 PM).
4. Click "Set Alarm".
5. When the current time matches the alarm time, an alert box appears notifying you.

Notes

- The alarm only triggers once when the time matches.
- You can improve it by adding sounds or other visual effects.
