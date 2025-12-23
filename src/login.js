const AUTH_TOKEN_KEY = "checklist_auth_token";
const AUTH_USER_KEY = "checklist_auth_user";
const DEMO_USER = {
    username: "demo",
    password: "demo123",
};

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginHint = document.querySelector(".login-hint");
let loginError;

function redirectToChecklist() {
    window.location.href = "index.html";
}

function isAuthenticated() {
    return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}

function ensureErrorElement() {
    if (loginError || !loginHint) {
        return loginError;
    }

    loginError = document.createElement("p");
    loginError.setAttribute("role", "alert");
    loginError.setAttribute("aria-live", "polite");
    loginError.style.minHeight = "18px";
    loginError.style.fontSize = "12px";
    loginError.style.color = "#dc2626";
    loginError.style.margin = "8px 0 0";
    loginError.style.textAlign = "center";
    loginHint.insertAdjacentElement("afterend", loginError);
    return loginError;
}

function setError(message) {
    const errorElement = ensureErrorElement();
    if (!errorElement) {
        return;
    }

    errorElement.textContent = message;
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
