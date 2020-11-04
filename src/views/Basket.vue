<template>
  <v-container>

    <v-snackbar
      top
      v-model="checkoutSuccess"
    >
      {{ checkoutText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="checkoutSuccess = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row>
      <v-col>
        <h1>Basket</h1>
        <div id="info" class="pa-2">
          <!-- skal ned på næste linje hvis det virker v-if="basket.length > 0"-->
    <v-simple-table id="item_table" 
     v-if="basket.length > 0"
  
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="width:100px">Name</th>
            <th class="text-left" style="width:70%">Quantity</th>
            <th class="text-left" style="width:100px">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in basket" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
                <v-icon color="white" @click="increaseQtn(item)">add_box</v-icon>
                {{item.quantity}}
                <v-icon color="white" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
            </td>
            <td>{{ item.price}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
<!-- skal ned på næste linje hvis det virker v-else -->
    <v-simple-table v-else>
      <p id="empty">The basket is empty</p>
    </v-simple-table>

    <v-divider></v-divider>
    <v-simple-table id="item_table">
    <v-row id="checkout" class="mt-4 mr-16" style="margin:0;">
        <v-col>
            <p>Subtotal</p>
            <p>Delivery</p>
            <br>
            <p>Total amount</p>
        </v-col>
        <v-col class="text-right">
            <p>{{subTotal}} DKK</p>
            <p>20 DKK</p>
            <br>
            <p>{{total}} DKK</p>
        </v-col>
    </v-row>
    <v-row class="mr-16 mb-2 justify-end" style="margin:0;">
        <v-btn color="blue" @click="addCheckoutItem()">checkout</v-btn>
    </v-row>
    </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
  export default {
    data () {
        return {
      items: [],
      checkoutSuccess: false,
      checkoutText: 'Your order has been placed!'
    }
    },
    methods: {
      addCheckoutItem() {
        this.$store.dispatch('setCheckoutItem'),
        this.checkoutSuccess = true;
        this.basket = [];
      },
      increaseQtn(item) {
      item.quantity++
      },
      decreaseQtn(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1)
      }
      }
    },
    computed: {
      basket() {
        return this.$store.getters.getBasketItems
      },
      menuItems() {
        return this.$store.getters.getMenuItems
      },
      subTotal () {
        var subCost = 0;
        for (var items in this.basket) {
          var individualItem = this.basket[items];
          subCost += Number(individualItem.quantity) * Number(individualItem.price);
        }
        return subCost
      },
      total () {
        var deliveryPrice = 20;
        var totalCost = Number(this.subTotal)
        return Number(totalCost) + Number(deliveryPrice)
      }
    }
  }
</script>

<style lang="scss" scoped>
main {
  background-image: url('..//assets/pic1.jpg') !important;
  background-size: cover;
}


  #info {
    color: black;
  }

    h1 {
    text-shadow: 3px 3px 3px black;
    font-size: 40px;
  }

  tr th {
    font-weight: 300;
  }

  #td_name {
    font-weight: bolder;
  }

  tr td {
    padding: 10px 10px 10px 16px;
  }

  #checkout {
      font-weight: 300;
  }

  #checkout p:first-child {
      line-height: 0;
  }

  #checkout p:last-child {
      font-weight: bolder;
  }

  #empty {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>

