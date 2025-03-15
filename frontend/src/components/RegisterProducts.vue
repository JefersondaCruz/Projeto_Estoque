<template>
  <div>
    <navbar />
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Cadastrar Nova Casa</h5>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="titulo">
                <i class="fas fa-home"></i> Título da Casa
              </label>
              <input type="text" id="titulo" class="form-control" v-model="casa.titulo" required />
            </div>
            <div class="form-group mt-3">
              <label for="preco">
                <i class="fas fa-dollar-sign"></i> Preço
              </label>
              <input type="number" id="preco" class="form-control" v-model="casa.preco" required />
            </div>
            <div class="form-group mt-3">
              <label for="localizacao">
                <i class="fas fa-map-marker-alt"></i> Localização
              </label>
              <input type="text" id="localizacao" class="form-control" v-model="casa.localizacao" required />
            </div>
            <div class="form-group mt-3">
              <label for="area">
                <i class="fas fa-ruler-combined"></i> Área (m²)
              </label>
              <input type="number" id="area" class="form-control" v-model="casa.area" required />
            </div>
            <div class="form-group mt-3">
              <label for="descricao">
                <i class="fas fa-align-left"></i> Descrição
              </label>
              <textarea id="descricao" class="form-control" v-model="casa.descricao" required></textarea>
            </div>
            <div class="form-group mt-3">
              <label for="imagem">Imagem da Casa</label>
              <input type="file" id="imagem" class="form-control" @change="handleFileUpload" />
            </div>
            <button type="submit" class="btn btn-primary mt-4">Cadastrar Casa</button>
          </form>
        </div>
      </div>
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">Pré-visualização</h5>
          <div class="card" style="width: 18rem;">
            <img :src="casa.imagemPreview" class="card-img-top" alt="Imagem da casa" />
            <div class="card-body">
              <h5 class="card-title">{{ casa.titulo || 'Título da Casa' }}</h5>
              <p class="card-text">{{ casa.preco ? `R$ ${casa.preco.toFixed(2)}` : 'Preço' }}</p>
              <p class="card-text">{{ casa.localizacao || 'Localização' }}</p>
              <p class="card-text">{{ casa.area ? `${casa.area} m²` : 'Área' }}</p>
              <p class="card-text">{{ casa.descricao || 'Descrição' }}</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import axios from 'axios';

export default {
  components: {
    navbar
  },
  data() {
    return {
      casa: {
        titulo: '',
        preco: '',
        localizacao: '',
        area: '',
        descricao: '',
        imagem: null,
        imagemPreview: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const formData = new FormData();
        formData.append('titulo', this.casa.titulo);
        formData.append('preco', this.casa.preco);
        formData.append('localizacao', this.casa.localizacao);
        formData.append('area', this.casa.area);
        formData.append('descricao', this.casa.descricao);
        if (this.casa.imagem) {
          formData.append('imagem', this.casa.imagem);
        }

        const response = await axios.post('https://api.exemplo.com/registroCasa', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Casa cadastrada:', response.data);
        alert('Casa cadastrada com sucesso!');

        this.casa = {
          titulo: '',
          preco: '',
          localizacao: '',
          area: '',
          descricao: '',
          imagem: null,
          imagemPreview: ''
        };
      } catch (error) {
        console.error('Erro ao cadastrar casa:', error);
        alert('Erro ao cadastrar casa. Tente novamente.');
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.casa.imagem = file;
        const reader = new FileReader();
        reader.onloadend = () => {
          this.casa.imagemPreview = reader.result; 
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
