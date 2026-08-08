# Custom Range Counter

A simple web-based counter that allows users to enter a **starting value** and an **ending value**. When the **Start** button is clicked, the counter increments by 1 every second until it reaches the specified ending value.

## 🚀 Features

* Enter a custom starting value.
* Enter a custom ending value.
* Counter increments automatically every second.
* Displays the current counter value.
* Validates empty input fields.
* Simple and responsive user interface.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap 4**

Bootstrap is used for the page layout and styling, while custom CSS is used for the heading and counter appearance.

## 📂 Project Structure

```text
Custom-Range-Counter/
│
├── CustomRangeCounter.html
├── CustomRangeCounter.css
├── CustomRangeCounter.js
└── README.md
```

## 💡 How It Works

1. Enter the **From Value**.
2. Enter the **To Value**.
3. Click the **Start** button.
4. The counter starts from the given value.
5. The counter increases by `1` every second.
6. The counter stops when it reaches the To Value.

The JavaScript uses `setInterval()` to update the counter every second and `clearInterval()` to stop it at the target value.

## ⚠️ Input Validation

The application checks whether the starting and ending values have been entered. If either field is empty, an alert is displayed asking the user to provide the required value.

## ▶️ How to Run

1. Clone this repository:

```bash
git clone https://github.com/your-username/Custom-Range-Counter.git
```

2. Open the project folder.
3. Open `CustomRangeCounter.html` in your browser.
4. Enter the starting and ending values.
5. Click **Start**.

## 📸 Preview

You can add a screenshot or GIF of the project here:

```markdown
![Custom Range Counter](screenshot.png)
```

## 📚 Learning Outcomes

Through this project, I practiced:

* DOM manipulation
* JavaScript event handling
* `setInterval()` and `clearInterval()`
* Input validation
* Incrementing values dynamically
* Using Bootstrap for responsive layouts
* Connecting HTML, CSS, and JavaScript

## 👨‍💻 Author

**Harsha**

If you found this project useful, feel free to ⭐ the repository.
