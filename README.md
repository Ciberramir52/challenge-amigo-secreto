# Secret Friend Challenge

This is a beginner-friendly example Secret Friend Challenge that demonstrates how to build a basic interactive web page using **HTML**, **CSS**, and **JavaScript**. It lets users add friend names to a list with immediate UI updates—showing the clean separation of structure, styling, and logic. And also let the user sort the friend and showing that friend in the UI.

---

## 🚀 Quick Start

1. **Clone or Download**

    ```
    git clone https://github.com/Ciberramir52/challenge-amigo-secreto.git
    cd challenge-amigo-secreto
    ```

    Or download and extract the `.zip` file.

2. **File Structure**

    ```
    simple-web-page/
    ├── index.html
    ├── style.css
    ├── app.js
    └── README.md
    ```

3. **Open the App**

    Just double-click on `index.html` to open it in your browser!  
    No build, no server, no dependencies required.

---

## 📝 Features

- Simple input + button UI for adding items.
- Instant update of the friends list.
- Instant update of the sorted friend.
- Responsive and accessible styling.
- Zero dependencies, 100% static HTML/CSS/JS.

---

# Instructions for Use - Friends List

## How to Add a Friend

1. **Type the friend's name** into the input field.
2. **Click the `Añadir` button** to add the friend to the list.
3. If the input field is empty, an alert will pop up asking you to enter a name.
4. The friends list will update immediately to show the newly added friend.
5. If a friend has been sorted previously (with the “Sorted Friend” legend visible), adding a new friend will remove that legend and display the full updated list again.

---

## How to Sort (Pick) a Friend

1. **Click the `Sortear Amigo` button.**
2. If the there is no friends added yet, an alert will pop up asking you to enter a friend.
3. A legend with the name of the chosen friend will appear above the button.
4. This “Sorted Friend” legend temporarily replaces the visible friends list, but **the friends themselves are NOT removed from memory.**
5. If you add a new friend after sorting, the legend will disappear and the complete list will be shown again.

---

## Visual Summary

- **Add friend:** type name → click `Añadir` → list updates.
- **Sort friend:** click `Sortear Amigo` → “Sorted Friend” appears, list hidden.
- **Add new friend after sorting:** legend disappears, full list visible again.

---

## Notes

- Adding empty names is prevented by an alert.
- Sorting only hides the list visually, it does not remove friends from storage.
- Sorting needs at least one friend, otherwise an alert will be shown.

---

Enjoy using your friends list!
