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
        <div class="col-md-4" v-for="produto in produtos" :key="produto.id">
          <div class="card">
            <img src="../assets/roupa_projeto.jpg" class="card-img-top" alt="Produto 1">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-tag"></i> {{produto.nome}}
              </h5>
              <p class="card-text">
                <i class="fas fa-dollar-sign"></i> {{produto.preco}}
              </p>
              <p class="card-text">
                <i class="fas fa-box"></i> {{ produto.estoque }} unidades em estoque</p>
              <button 
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              @click="openModal(produto)"
              >
                Editar
              </button>
              <button
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmModal"
                  @click="setProductToSell(produto)"
                  :disabled="produto.estoque === 0"
                >
                  Vendido
                </button>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="confirmModal"
          tabindex="-1"
          aria-labelledby="confirmModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="confirmModalLabel">Confirmação</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Tem certeza que deseja marcar o produto "<strong>{{ productToSell.nome }}</strong>" como vendido?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                  @click="confirmSell"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        <div
            class="modal fade"
            id="editModal"
            tabindex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Editar Produto</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="productName" class="form-label">
                    <i class="fas fa-tag"></i>  Nome do Produto
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="productName"
                    v-model="selectedProduct.nome"
                  />
                </div>
                <div class="mb-3">
                  <label for="productPrice" class="form-label">
                    <i class="fas fa-dollar-sign"></i> Preço
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="productPrice"
                    v-model="selectedProduct.preco"
                  />
                </div>
                <div class="mb-3">
                  <label for="productStock" class="form-label">
                    <i class="fas fa-box"></i> Quantidade
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="productStock"
                    v-model="selectedProduct.estoque"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="deleteProduct">Excluir</button>
              <button type="button" class="btn btn-primary" @click="updateProduct">Atualizar</button>
            </div>
          </div>
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
    navbar,
    
  },
  data() {
    return {
    produtos: [
        { id: 1, nome: 'Produto 1', preco: 50.01, estoque: 10 },
        { id: 2, nome: 'Produto 2', preco: 80.50, estoque: 5 }, 
      ],
      selectedProduct: {},
      productToSell: {},
    };
  },
  methods: {
    openModal(product) {
      this.selectedProduct = { ...product };;
    },
    setProductToSell(produto) {
      this.productToSell = produto;
    },
    confirmSell() {
      if (this.productToSell) {
        this.productToSell.estoque -= 1;
        if (this.productToSell.estoque === 0) {
          alert(`O produto "${this.productToSell.nome}" está esgotado!`);
        }
        this.productToSell = null;
      }
    },
  },
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

.modal-content {
  border-radius: 10px;
} 

.card-body .btn {
  margin-right: 5px;
}
</style>
