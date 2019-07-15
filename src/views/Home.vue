<template>
   <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading"/>

    <div v-else class="row">
      <homeBill 
      :rates="currency.rates"
     />

     <homeCurrency 
      :rates="currency.rates"
      :date="currency.date"
        />
    </div>
   
  </div>
</template>

<script>
  import homeBill from '@/components/homeBill'
  import homeCurrency from '@/components/homeCurrency'
export default {
  name: 'home',
  data(){
    return {
      loading: true,
      currency: null
    }
  },
  components:{
    homeBill,
    homeCurrency
  },
  
  async mounted() {
   this.currency = await this.$store.dispatch('fetchCurrency')
   console.log(this.currency.rates)
   this.loading = false

  },
  methods:{
   async refresh(){
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
 
}
</script>
