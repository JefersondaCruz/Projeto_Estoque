<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Estoque Total</h5>
              <p class="card-text">100 Produtos em Estoque</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Produtos Baixo Estoque</h5>
              <p class="card-text">5 Produtos</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Produtos Vendidos</h5>
              <p class="card-text">50 Produtos Vendidos</p>
            </div>
          </div>
        </div>
      </div>

      <div class="my-4">
        <router-link to="/Register-Product">
          <button class="btn btn-primary" >Adicionar Novo Produto</button>
        </router-link>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/roupa_projeto.jpg" class="card-img-top" alt="Produto 1">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-tag"></i> Produto 1
              </h5>
              <p class="card-text">
                <i class="fas fa-dollar-sign"></i> R$ 50,00
              </p>
              <p class="card-text">10 unidades em estoque</p>
              <button class="btn btn-warning">Editar</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/roupa_projeto.jpg" class="card-img-top" alt="Produto 2">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-tag"></i> Produto 2
              </h5>
              <p class="card-text">
                <i class="fas fa-dollar-sign"></i> R$ 80,00
              </p>
              <p class="card-text">5 unidades em estoque</p>
              <button class="btn btn-warning">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';

export default {
  components: {
    navbar
  }
}
</script>

<style scoped>

.navbar {
  margin-bottom: 20px;
}

.card {
  margin-bottom: 20px;
}

.card-img-top {
  width: 100%;
  height: 350px;
  object-fit: cover; 
}
</style>
