<template>
  <v-container fluid>
    <v-row id="info_box">
      <v-col>
        <h1>Orders</h1>
        <v-row>
            <v-col cols="12">
                <h2 class="font-weight-bold">INFO:</h2>
            <v-simple-table class="pa-2">
                <v-row class="pl-2">
                <v-col>
                    
                    <v-row class="mb-6" align="center">
                        <div id="status_box" class="green">COMPLETED</div>
                        <span class="font-weight-light pl-1">Done</span>
                    </v-row>
                    <v-row class="mb-3 mt-3" align="center">
                        <div id="status_box" class="orange">IN-PROGRESS</div>
                        <span class="font-weight-light pl-1">Somebody is working on it</span>
                    </v-row>
                    <v-row class="mt-6" align="center">
                        <div id="status_box" class="red">NOT STARTED</div>
                        <span class="font-weight-light pl-1">Not started yet</span>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <div id="status_box" class="green">COMPLETED</div>
                        <div id="status_box" class="orange">IN-PROGRESS</div>
                        <div id="status_box" class="red">NOT STARTED</div>
                    </v-row>
                    <v-row>
                        <p class="font-weight-light"><b> Single </b> click to switch stage: <br> complete => in progress => <br> <b> Double click </b> the box to reset to "not started"</p>
                        <span class="font-weight-light">
                            <v-icon color="grey">archive</v-icon>
                            <p>Archive to "hide" it from orders list</p>
                        </span>
                    </v-row>
                </v-col>
                </v-row>
            </v-simple-table>
            </v-col>
        </v-row>
            <v-divider></v-divider>
            <!-- Order Items Area -->
            <v-divider></v-divider>
            <h2 class="font-weight-bold">ORDERS:</h2>
    <v-simple-table id="item_table">  
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="width:15%">Order No.</th>
            <th class="text-left" style="width:10%">Qnt</th>
            <th class="text-left" style="width:20%">Item</th>
            <th class="text-left" style="width:10%">Price</th>
            <th class="text-center" style="width:15%">Status</th>
            <th class="text-left" style="width:20%">Archive item</th>
            <th class="text-left" style="width:10%">Remove</th>
          </tr>
        </thead>
       
        <tbody>
          <tr v-for="item in storeOrderTest" :key="item.name">
            <td>
              <span id="td_name">{{ item.orderNumber }}</span><br>
            </td>
            <td class="py-3">
              <span id="td_name"><p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">{{ subItem.quantity }} </p></span><br>
            </td>
            <td class="py-3">
              <span id="td_name"><p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">{{ subItem.name }} </p></span><br>
            </td>
            <td class="py-3">
              <span id="td_name"><p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">{{ subItem.price}} </p></span><br>
            </td>
            <td>
                <div id="status_box" v-bind:class="item.status" @click="switchStage(item.id)"> 
                  {{ item.status }}
                </div>
            </td>
            <td>
              <v-btn text>
                <v-icon color="grey" @click="archiveOrderItem(item.id)">archive</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn text @click="deleteOrderItem(item.id)">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      </v-col>
    </v-row>
     <v-col id="revenue">
          <h1 class="mb-10">Revenue</h1>
          <div class="pa-2">
            <v-simple-table class="pa-2">
                <p class="font-weight-bold body-1 darkgrey-text">Completed Orders:</p>
                <div>
                  <p id="total_orders">Total Orders: <span class="blue--text  font-weight-bold"> {{orderItems.length}} </span></p>
                </div>
                <!-- v-if="item.archive == true" -->
                <div id="revenue_list" v-for="item in orderItems" :key="item.name">
                  <p> Ordernumber:
                  {{item.orderNumber}}
                  <v-btn text @click="deleteOrderItem(item.id)"><v-icon color="red">delete</v-icon></v-btn>
                  </p> 
                </div>
            </v-simple-table>
            <v-divider></v-divider>
            <v-simple-table class="pa-2">
                <div id="total_revenue">
                  <p id="total_revenue_text">
                    Total Revenue: <span id="text_total"> {{revenueTotal}} </span>
                  </p>
                </div>
            </v-simple-table>
        </div>
      </v-col>
  </v-container>
</template>

<style lang="scss" scoped>
    .container {
        display: flex;
    }

    #info_box {
        max-width: 60%;
    }

    #revenue {
        max-width: 40%;
    }

  h1 {
    text-shadow: 3px 3px 3px black;
    font-size: 40px;
  }

  h2 {
      text-shadow: 2px 2px 2px black;
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

  #item_table {
    padding-bottom: 5px;
  }

  #item_description {
    font-style: italic;
    font-weight: 300;
    font-size: 13px;
  }

  #status_box {
      height: 35px;
      width: 115px;
      border-radius: 2px;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-shadow: 1px 1px 1px black;
      text-transform: capitalize;

  }

  #total_revenue {
    padding: 20px 10px 20px 0;
  }

  #total_revenue_text {
    margin: 0;
    font-style: italic;
    width: 100;
  }
  #text_total {
    text-decoration: underline;
    border-bottom: 1px solid white;
    font-weight: bold;
    font-style: normal;
  }
</style>


<script>
/*eslint-disable*/
import { dbOrders } from '../../firebase'


  export default {
    data () {
        return {
      basket: [],
      dialog: false,
      item: [],
      }
    },
    beforeCreate() {
      this.$store.dispatch('setOrderItems')
    },
    methods: {
      switchStage(id) {
        let selectedOrderItem =this.orderItems.
        filter(item => item.id  === id)[0];

        if(selectedOrderItem.status === "IN PROGRESS") {
          dbOrders.doc(id).update({status:"COMPLETE"})
          .then(() => {
          })
        }
        else if(selectedOrderItem.status === "NOT STARTED") {
          dbOrders.doc(id).update({status:"IN PROGRESS"})
          .then(() => {
          })
        }
        else if(selectedOrderItem.status === "COMPLETE") {
          dbOrders.doc(id).update({status:"NOT STARTED"})
          .then(() => {
          })
        }
      },

      archiveOrderItem(id) {
        dbOrders.doc(id).update({archive: true, storeOrder:true})
        .then(() => {

        })
      },

      deleteOrderItem(id) {
        dbOrders.doc(id).delete().then(() => {
          console.log("Stuff has been deleted");
        }).catch((error) => {

        })
      },

      deleteItem(id) {
            dbMenuAdd.doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
        }).catch(function(error) {
                console.error("Error removing document: ", error);
        });
        },
      addToBasket(item) {
        if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
          item = this.basket.find(itemInArray => item.name === itemInArray.name);
          this.increaseQtn(item);
        }
        else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1
        })
        }
      }
    },
    computed: {
      orderItems() {
        return this.$store.getters.getOrderItems
      },
      storeOrderTest () {
        return this.orderItems.filter(oItem => oItem.storeOrder == false)
      },
      revenueTotal() {
        var revenueIncome = 0;
        this.orderItems.forEach(element => {
          if(element.archive == true) {
            element.orderLines.forEach(element1 => {
              revenueIncome += element1.price * element1.quantity
            })
          }
        })
        return revenueIncome
      },
    }
  }
</script>
