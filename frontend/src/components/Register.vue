<template>
<div class="register-page">
    <div class="register-card">
    <h2 class="register-title">Crie sua conta</h2>
    <p class="register-subtitle">Preencha os campos abaixo para se registrar</p>
    
    <form @submit.prevent="handleRegister">
        <div class="form-group">
        <label for="name">Nome</label>
        <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Digite seu nome completo"
            class="form-control"
            required
        />
        </div>
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
        <div class="form-group">
        <label for="confirmPassword">Confirmar Senha</label>
        <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            placeholder="Confirme sua senha"
            class="form-control"
            required
        />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Registrar</button>
    </form>

    <p class="login-link">
        Já tem uma conta? <a href="/">Entre aqui</a>
    </p>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    };
},
methods: {
    handleRegister() {
    if (this.form.password !== this.form.confirmPassword) {
        alert("As senhas não correspondem.");
        return;
    }


    const userData = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
    };

    console.log("Dados enviados para registro:", userData);

    alert("Registro realizado com sucesso!");
    },
},
};
</script>

<style scoped>

.register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
}

.register-card {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
}

.register-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.register-subtitle {
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

.login-link {
    margin-top: 15px;
    font-size: 14px;
}

.login-link a {
    color: #007bff;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>
