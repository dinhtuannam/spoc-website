export default class RegrexConst {
    // Chỉ chấp nhận số 0-9, độ dài 10 số, bắt đầu bằng số 0
    static phone: RegExp = /^0\d{9}$/;

    // RFC 5322 cho email
    static mail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Chỉ chấp nhận số và chữ thường, ít nhất 6 ký tự
    static password: RegExp = /^[a-z0-9]{6,}$/;

    // Helper methods để kiểm tra
    static isValidPhone = (phone: string): boolean => {
        return RegrexConst.phone.test(phone);
    };

    static isValidEmail = (email: string): boolean => {
        return RegrexConst.mail.test(email);
    };

    static isValidPassword = (password: string): boolean => {
        return RegrexConst.password.test(password);
    };
}
