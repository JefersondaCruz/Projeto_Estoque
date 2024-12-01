<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Cadastrar Novo Produto</h5>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="nome">
                <i class="fas fa-tag"></i> Nome do Produto
              </label>
              <input type="text" id="nome" class="form-control" v-model="produto.nome" required />
            </div>
            <div class="form-group mt-3">
              <label for="preco">
                <i class="fas fa-dollar-sign"></i> Preço
              </label>
              <input type="number" id="preco" class="form-control" v-model="produto.preco" required />
            </div>
            <div class="form-group mt-3">
              <label for="quantidade">
                <i class="fas fa-cogs"></i> Quantidade
              </label>
              <input type="number" id="quantidade" class="form-control" v-model="produto.quantidade" required />
            </div>
            <div class="form-group mt-3">
              <label for="tamanho">
                <i class="fas fa-ruler"></i> tamanho
              </label>
              <input type="text" id="tamanho" class="form-control" v-model="produto.tamanho" required />
            </div>
            <div class="form-group mt-3">
              <label for="imagem">Imagem do Produto</label>
              <input type="file" id="imagem" class="form-control" @change="handleFileUpload" />
            </div>
            <button type="submit" class="btn btn-primary mt-4">Cadastrar Produto</button>
          </form>
        </div>
      </div>
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">Pré-visualização</h5>
          <div class="card" style="width: 18rem;">
            <img :src="produto.imagemPreview" class="card-img-top" alt="Imagem do produto" />
            <div class="card-body">
              <h5 class="card-title">{{ produto.nome || 'Nome do Produto' }}</h5>
              <p class="card-text">{{ produto.preco ? `R$ ${produto.preco.toFixed(2)}` : 'Preço' }}</p>
              <p class="card-text">{{ produto.quantidade ? `${produto.quantidade} unidades` : 'Quantidade' }}</p>
              <p class="card-text">{{ produto.tamanho ? `Tamanho: ${produto.tamanho}` : 'Tamanho' }}</p>
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
  },
  data() {
    return {
      produto: {
        nome: '',
        preco: '',
        quantidade: '',
        tamanho: '',
        imagem: null,
        imagemPreview: ''
      }
    };
  },
  methods: {
    submitForm() {

      console.log('Produto cadastrado:', this.produto);
    },
    handleFileUpload(event) {

      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.produto.imagemPreview = reader.result; 
        };
        reader.readAsDataURL(file);
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}

.card {
  margin-bottom: 20px;
}
</style>
