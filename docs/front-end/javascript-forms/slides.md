autoscale: true

---

# Form elements

- `<form>`
- `<label>`
- `<input type="...">`
- `<textarea>`
- `<select>` and `<option>`
- `<button>`

---

```html
<div>
  <form method="post" action="/" id="login-form">
    <div class="input-field">
      <label for="email-input">Email</label>
      <input
        type="email"
        name="email-input"
        id="email-input"
        placeholder="example@domain.com"
        required
      />
    </div>
    <div class="input-field">
      <label for="password-input">Password</label>
      <input
        type="password"
        name="password-input"
        id="password-input"
        required
      />
    </div>
    <div class="input-field">
      <label for=""></label>
      <input type="submit" value="Log In" />
    </div>
  </form>
</div>
```

---

# input types

- text - the one you use everywhere
- checkbox - a checkbox
- hidden - holds data, doesn't appear
- password - doesn't show the input
- radio - allows a single value to be selected out of multiple choices
- submit - button that submits the form
- reset - button that clears the form
- button - a button with no purpose

---

# input types, bonus round

- color
- date
- datetime-local
- email
- number
- tel
- time
- url

---

# Form events

- focus - element gained focus
- blur - element lost focus
- input - element's value changed
- change - "a change to the element's value is committed by the user," usually after losing focus
- submit - submit button was pressed
- reset - reset button was pressed

---

# Events

- `event.target`
- `event.preventDefault()`

---

# How do I find this stuff in the docs?

---

---

# FormData

---

# DOM Manipulation, round 2

- createElement
- appendChild
- setAttribute
- getAttribute

---
