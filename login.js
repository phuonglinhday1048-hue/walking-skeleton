function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}


// Xử lý form đăng nhập trên HTML
if (typeof document !== "undefined") {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        if (result) {
            document.getElementById("message").innerText =
                "Đăng nhập thành công";
        } else {
            document.getElementById("message").innerText =
                "Sai tài khoản hoặc mật khẩu";
        }
    });
}


// Xuất hàm để Jest có thể test
if (typeof module !== "undefined") {
    module.exports = login;
}
