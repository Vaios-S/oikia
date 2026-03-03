const registerForm = document.querySelector("#registerForm");

function getUsers() {
  const usersJSON = localStorage.getItem("users");
  return usersJSON ? JSON.parse(usersJSON) : [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim().toLowerCase();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users = getUsers();
    const emailEx = users.some((u) => u.email === email);

    if (emailEx) {
      alert("Email is already registered.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);
    window.location.href = "login.html";
  });
}

const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim().toLowerCase();
    const password = document.querySelector("#password").value;

    const users = getUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("User not found.");
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "index.html";
  });
}
