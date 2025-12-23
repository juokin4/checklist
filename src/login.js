const AUTH_TOKEN_KEY = "checklist_auth_token";
const AUTH_USER_KEY = "checklist_auth_user";
const DEMO_USER = {
    username: "demo",
    password: "demo123",
};

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

function redirectToChecklist() {
    window.location.href = "index.html";
}

function isAuthenticated() {
    return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}

function setError(message) {
    if (!loginError) {
        return;
    }

    loginError.textContent = message;
}

if (isAuthenticated()) {
    redirectToChecklist();
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        setError("Lütfen kullanıcı adı ve şifre girin.");
        return;
    }

    if (username !== DEMO_USER.username || password !== DEMO_USER.password) {
        setError("Hatalı kullanıcı adı veya şifre.");
        return;
    }

    setError("");

    const tokenPayload = `${username}-${Date.now()}`;
    localStorage.setItem(AUTH_TOKEN_KEY, tokenPayload);
    localStorage.setItem(AUTH_USER_KEY, username);

    redirectToChecklist();
});

[usernameInput, passwordInput].forEach((input) => {
    if (!input) {
        return;
    }

    input.addEventListener("input", () => {
        if (loginError?.textContent) {
            setError("");
        }
    });
});
