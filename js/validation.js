function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    if (!username || !email || !password || !phone) {
        alert('Tất cả các trường là bắt buộc');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Định dạng email không hợp lệ');
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert(' Định dạng số điện thoại không hợp lệ');
        return false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Mật khẩu phải chứa chữ hoa, chữ thường, số, ký tự đặc biệt và dài ít nhất 8 ký tự');
        return false;
    }

    const user = {
        username: username,
        email: email,
        password: password,
        phone: phone
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    alert('Đăng kí thành công');
    window.location.href = 'login.html';
    return false;
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html';
    } else {
        alert('Email hoặc mật khẩu không chính xác');
    }
}
