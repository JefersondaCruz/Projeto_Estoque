<template>
<div class="login-page">
    <div class="login-card">
    <h2 class="login-title">Bem-vindo!</h2>
    <p class="login-subtitle">Entre para acessar sua conta</p>
    
    <form @submit.prevent="handleLogin">
        <div class="form-group">
        <label for="email">E-mail</label>
        <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Digite seu e-mail"
            class="form-control"
            required
        />
        </div>
        <div class="form-group">
        <label for="password">Senha</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            placeholder="Digite sua senha"
            class="form-control"
            required
        />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Entrar</button>
    </form>

    <p class="signup-link">
        Não tem uma conta? <a href="/register">Cadastre-se</a>
    </p>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    form: {
        email: "",
        password: "",
    },
    };
},
methods: {
    handleLogin() {
    if (this.form.email === "admin@example.com" && this.form.password === "password") {
        alert("Login bem-sucedido!");
    } else {
        alert("E-mail ou senha inválidos.");
    }
    },
},
};
</script>
<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
}

.login-card {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
}

.login-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.login-subtitle {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    font-weight: bold;
    font-size: 14px;
    color: #495057;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 14px;
    margin-top: 5px;
}

.form-control:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.btn-primary {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
}

.signup-link {
    margin-top: 15px;
    font-size: 14px;
}

.signup-link a {
    color: #007bff;
    text-decoration: none;
}

.signup-link a:hover {
    text-decoration: underline; 
}
</style>