/* ============================================
   LUXE Fashion Boutique - Auth System
   In-memory user authentication with roles
   ============================================ */

const Auth = {
    currentUser: null,
    users: [],

    init() {
        const storedUser = sessionStorage.getItem('luxeCurrentUser');
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser);
        }
        const storedUsers = sessionStorage.getItem('luxeUsers');
        if (storedUsers) {
            this.users = JSON.parse(storedUsers);
        }
    },

    signup(name, email, password, role) {
        const exists = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (exists) {
            return { success: false, message: 'An account with this email already exists.' };
        }
        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters.' };
        }
        const user = {
            id: Date.now(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: password,
            role: role || 'client',
            joined: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };
        this.users.push(user);
        sessionStorage.setItem('luxeUsers', JSON.stringify(this.users));
        return { success: true, message: 'Account created successfully!' };
    },

    signin(email, password, role) {
        const user = this.users.find(
            u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
        if (!user) {
            return { success: false, message: 'Invalid email or password.' };
        }
        this.currentUser = user;
        sessionStorage.setItem('luxeCurrentUser', JSON.stringify(user));
        return { success: true, message: 'Login successful!' };
    },

    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('luxeCurrentUser');
    },

    isLoggedIn() {
        return this.currentUser !== null;
    },

    getUser() {
        return this.currentUser;
    },

    getRole() {
        return this.currentUser ? this.currentUser.role : null;
    },

    isAdmin() {
        return this.currentUser && this.currentUser.role === 'admin';
    },

    isClient() {
        return this.currentUser && this.currentUser.role === 'client';
    },

    requireAuth(role) {
        if (!this.isLoggedIn()) {
            window.location.href = 'signin.html';
            return false;
        }
        if (role && this.currentUser.role !== role) {
            window.location.href = this.currentUser.role === 'admin' ? 'dashboard.html' : 'client-dashboard.html';
            return false;
        }
        return true;
    }
};

Auth.init();
