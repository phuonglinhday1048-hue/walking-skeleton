const login = require("./login");

test("Đăng nhập đúng với admin và 123", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Sai mật khẩu thì đăng nhập thất bại", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Sai username thì đăng nhập thất bại", () => {
    expect(login("user", "123")).toBe(false);
});

test("Sai cả username và password", () => {
    expect(login("user", "456")).toBe(false);
});
