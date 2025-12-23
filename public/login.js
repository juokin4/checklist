const AUTH_TOKEN_KEY = "checklist_auth_token";
const AUTH_USER_KEY = "checklist_auth_user";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function redirectToChecklist() {
    window.location.href = "index.html";
}

function isAuthenticated() {
    return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}

if (isAuthenticated()) {
    redirectToChecklist();
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        return;
    }

    const tokenPayload = `${username}-${Date.now()}`;
    localStorage.setItem(AUTH_TOKEN_KEY, tokenPayload);
    localStorage.setItem(AUTH_USER_KEY, username);

    redirectToChecklist();
});
