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

    // TODO: validations
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

    // TODO: save user to localStorage
    // TODO: redirect to login
  });
}
