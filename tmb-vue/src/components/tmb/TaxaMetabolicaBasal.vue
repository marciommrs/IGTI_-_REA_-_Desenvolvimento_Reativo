<template>
  <div>
    <div class="container mt-3">
      <div class="card mb-3">
        <div class="card-header">
          Cálculo da Taxa Metabólica Basal
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-4">
                <label for="name">Nome</label>
                <input type="text" v-model="nome" id="name" class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <label for="peso">Peso</label>
                <input type="number" v-model="peso" id="peso" class="form-control">
              </div>
              <div class="col-2">
                <label for="altura">Altura</label>
                <input type="number" v-model="altura" id="altura" class="form-control">
              </div>
              <div class="col-2">
                <label for="idade">Idade</label>
                <input type="number" v-model="idade" id="idade" class="form-control">
              </div>
              <div class="form-group">
                <label for="sexo">Sexo</label>
                <select class="form-control" style="padding-left:10px" v-model="sexo" id="sexo">
                  <option value="M" selected>Masculino</option>
                  <option value="F">Feminino</option>
                </select>
              </div>
            </div>
            <div class="row">
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class=" container">
      <div class="card">
        <div class="card-header">
          Olá {{ nome }}. A seguir sua taxa metabólica basal.
        </div>
        <div class="card-body">
          <p>Taxa de metabolismo basal (TMB): {{ tmb() }}</p>
        </div>
        <div class="card-footer min-h-50">
          <span id="spanText">Taxa Metabolica Basa é o total de calorias gastas para manter as funções vitais, como os batimentos cardíacos, a pressão arterial e a temperatura corporal.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaxaMetabolicaBasal",
  props: {
    nome: String,
    peso: Number,
    altura: Number,
    idade: Number,
    sexo: String
  },
  methods: {
    tmb() {
      const p = this.peso ? this.peso : 0;
      const a = this.altura ? this.altura : 0;
      const i = this.idade ? this.idade : 0;

      var resultado = '';
      if (this.sexo) {
        if (this.sexo === 'M') {
          console.log('Masculino');
          resultado = parseFloat(66 + (13.7 * p) + (5 * a) - (6.8 * i));
        } else {
          console.log('Feminino');
          resultado = parseFloat(665 + (9.6 * p) + (1.7 * a) - (4.7 * i));
        }
      }

      return resultado;
    }
  }
}
</script>

<style scoped>

</style>