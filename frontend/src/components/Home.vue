<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row">
        <!-- Filtros à esquerda -->
        <div class="col-md-3 mb-4">
          <div class="filters">
            <h5>Filtros</h5>
            
            <!-- Filtro de valor -->
            <div class="form-group">
              <label for="price">Preço</label>
              <input 
                type="range" 
                id="price" 
                class="form-control" 
                v-model="maxPrice"
                min="100000" max="2000000" step="10000" 
              />
              <p>Até R$ {{ maxPrice.toFixed(2) }}</p>
            </div>
            
            <!-- Filtro de localização -->
            <div class="form-group">
              <label for="location">Localização</label>
              <select v-model="locationFilter" class="form-control" id="location">
                <option value="">Todas</option>
                <option value="Centro">Centro</option>
                <option value="Bairro A">Bairro A</option>
                <option value="Litoral">Litoral</option>
                <option value="Subúrbio">Subúrbio</option>
                <option value="Área Nobre">Área Nobre</option>
                <option value="Histórico">Histórico</option>
                <option value="Bairro B">Bairro B</option>
                <option value="Interior">Interior</option>
                <option value="Verde">Verde</option>
              </select>
            </div>

            <!-- Redes sociais -->
            <div class="social-icons">
              <a href="#" class="text-primary"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-info"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-danger"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <!-- Lista de Casas -->
        <div class="col-md-9">
          <div class="my-4">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Pesquisar casa..." 
              v-model="searchQuery"
            />
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-6 col-12 mb-4" v-for="casa in filteredCasas" :key="casa.id">
              <div class="card shadow-sm border-light rounded" @click="openModal(casa)">
                <img :src="getImageUrl(casa.imagem)" class="card-img-top" alt="Casa">
                <div class="card-body">
                  <h5 class="card-title">{{ casa.nome }}</h5>
                  <p class="card-text">Preço: R$ {{ casa.preco.toFixed(2) }}</p>
                  <p class="card-text">Localização: {{ casa.localizacao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal com informações detalhadas -->
    <div v-if="modalCasa" class="modal fade show" tabindex="-1" style="display: block;" @click.self="closeModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalCasa.nome }}</h5>
            <button type="button" class="close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <img :src="getImageUrl(modalCasa.imagem)" class="img-fluid" alt="Casa">
            <p><strong>Preço:</strong> R$ {{ modalCasa.preco.toFixed(2) }}</p>
            <p><strong>Localização:</strong> {{ modalCasa.localizacao }}</p>
            <p><strong>Área:</strong> {{ modalCasa.area }} m²</p>
            <p><strong>Descrição:</strong> {{ modalCasa.descricao }}</p>
            <a :href="'https://wa.me/55' + modalCasa.whatsapp" class="btn btn-success" target="_blank">Entrar em contato via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';

export default {
  components: { navbar },
  data() {
    return {
      searchQuery: '',
      maxPrice: 1000000,
      locationFilter: '',
      modalCasa: null,
      casas: [
        { id: 1, nome: 'Casa Moderna', preco: 450000, localizacao: 'Centro', area: 120, descricao: 'Casa moderna com piscina.', imagem: 'casa1.jpg' },
        { id: 2, nome: 'Casa Familiar', preco: 350000, localizacao: 'Bairro A', area: 100, descricao: 'Ótima para famílias grandes.', imagem: 'casa2.jpg' },
        { id: 3, nome: 'Casa de Praia', preco: 500000, localizacao: 'Litoral', area: 150, descricao: 'Casa de frente para o mar.', imagem: 'casa1.jpg' },
        { id: 4, nome: 'Apartamento Luxo', preco: 800000, localizacao: 'Centro', area: 90, descricao: 'Cobertura com vista panorâmica.', imagem: 'casa2.jpg' },
        { id: 5, nome: 'Casa Simples', preco: 200000, localizacao: 'Subúrbio', area: 80, descricao: 'Casa aconchegante e econômica.', imagem: 'casa1.jpg' },
        { id: 6, nome: 'Mansão', preco: 1500000, localizacao: 'Área Nobre', area: 300, descricao: 'Mansão com piscina e jardim.', imagem: 'casa2.jpg' },
        { id: 7, nome: 'Casa Colonial', preco: 600000, localizacao: 'Histórico', area: 140, descricao: 'Estilo colonial com lareira.', imagem: 'casa1.jpg' },
        { id: 8, nome: 'Casa Compacta', preco: 280000, localizacao: 'Bairro B', area: 70, descricao: 'Perfeita para solteiros.', imagem: 'casa2.jpg' },
        { id: 9, nome: 'Chácara', preco: 700000, localizacao: 'Interior', area: 250, descricao: 'Chácara espaçosa com árvores frutíferas.', imagem: 'casa1.jpg' },
        { id: 10, nome: 'Casa Ecológica', preco: 500000, localizacao: 'Verde', area: 110, descricao: 'Sustentável com energia solar.', imagem: 'casa2.jpg' }
      ]
    };
  },
  computed: {
    filteredCasas() {
      return this.casas.filter(casa =>
        casa.nome.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        casa.preco <= this.maxPrice &&
        (this.locationFilter === '' || casa.localizacao === this.locationFilter)
      );
    }
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/${imageName}`, import.meta.url).href;
    },
    openModal(casa) {
      this.modalCasa = casa;
    },
    closeModal() {
      this.modalCasa = null;
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.card {
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 5px;
}

input.form-control {
  border-radius: 20px;
  padding: 0.75rem;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-md-4 {
  padding: 0 15px;
}

.filters {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-icons a {
  margin-right: 10px;
  font-size: 1.5rem;
}

.modal-content {
  border-radius: 10px;
}

@media (max-width: 768px) {
  .col-md-4 {
    flex: 1 1 100%;
  }
}
</style>
