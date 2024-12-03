<template>
  <div>
    <navbar />
    <div class="container">
      <h2>Estatísticas de Vendas</h2>

      <!-- Filtros de Data -->
      <div class="row mb-4">
        <div class="col-md-4">
          <label for="monthFilter">Selecionar Mês:</label>
          <select v-model="selectedMonth" id="monthFilter" class="form-select">
            <option v-for="month in months" :key="month.value" :value="month.value">
              {{ month.label }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="yearFilter">Selecionar Ano:</label>
          <select v-model="selectedYear" id="yearFilter" class="form-select">
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <!-- Estatísticas -->
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total de Produtos Vendidos</h5>
              <p class="card-text">{{ totalSales }} Produtos</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Valor Total Vendido</h5>
              <p class="card-text">{{ totalValueSold }} R$</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Média Diária</h5>
              <p class="card-text">{{ dailyAverage }} R$</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráfico de Vendas -->
      <div class="my-4">
        <Line :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

  
<script>
import navbar from "@/components/navbar.vue";
import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  components: {
    navbar,
    Line, // Gráfico de linha
  },
  data() {
    return {
      months: [
        { label: "Janeiro", value: 1 },
        { label: "Fevereiro", value: 2 },
        { label: "Março", value: 3 },
        { label: "Abril", value: 4 },
        { label: "Maio", value: 5 },
        { label: "Junho", value: 6 },
        { label: "Julho", value: 7 },
        { label: "Agosto", value: 8 },
        { label: "Setembro", value: 9 },
        { label: "Outubro", value: 10 },
        { label: "Novembro", value: 11 },
        { label: "Dezembro", value: 12 },
      ],
      years: [2023, 2024],
      selectedMonth: 1,
      selectedYear: 2024,
      salesData: [], // Dados de vendas, pode vir da API
      totalSales: 0,
      totalValueSold: 0,
      dailyAverage: 0,
      chartData: {
        labels: [], // Labels para os meses/dias
        datasets: [
          {
            label: "Valor Vendido",
            data: [], // Valores vendidos
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true, // Preencher a área abaixo da linha
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Vendas por Mês',
          },
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  watch: {
    selectedMonth() {
      this.fetchData();
    },
    selectedYear() {
      this.fetchData(); 
    },
  },
  methods: {
    fetchData() {
      this.salesData = [
        { id: 1, nome: "Produto A", vendas: 5, preco: 50.01, dataVenda: "2024-01-15" },
        { id: 2, nome: "Produto B", vendas: 3, preco: 80.50, dataVenda: "2024-01-16" },
      ];

      this.calculateStatistics();

      this.updateChart();
    },
    calculateStatistics() {
      let totalSales = 0;
      let totalValue = 0;

      this.salesData.forEach((sale) => {
        totalSales += sale.vendas;
        totalValue += sale.vendas * sale.preco;
      });

      this.totalSales = totalSales;
      this.totalValueSold = totalValue.toFixed(2);
      this.dailyAverage = (totalValue / 30).toFixed(2);
    },
    updateChart() {
      this.chartData.labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
      this.chartData.datasets[0].data = [1000, 2000, 3000, 1500, 2500, 1800];
    },
  },
};
</script>

  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }

  .my-4 {
  height: 400px;
}
  </style>
  