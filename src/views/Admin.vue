<template>
  <v-container>
   <v-snackbar
      top
      v-model="updatedSucces"
    >
      {{ updatedText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="updatedSucces = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row>
      <v-col>
        <h1>Items</h1>
        <div id="info" class="pa-2">
    <v-simple-table id="item_table"
    >
      <template v-slot:default>
        <thead>
          <v-btn text to="/addNew">
            <v-icon>add</v-icon><span style="padding:0 10px">Add Item</span>
          </v-btn>
          <tr>
            <th class="text-left" style="width:70%">Name</th>
            <th class="text-left" style="width:100px">Price</th>
            <th class="text-left" style="width:100px">Edit</th>
            <th class="text-left" style="width:100px">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menuItems" :key="item.name">
            <td>
              <span id="td_name">{{ item.name }}</span><br>
              <span id="item_description">{{ item.description }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn text>
                <v-icon color="orange" @click.stop="dialog = true" @click="editItem(item)">edit</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn text @click="deleteItem(item.id)">
                <v-icon color="red">delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <h1 class="pl-5 pt-2">Edit Item</h1>
        <div class="pa-5">
            <v-text-field v-model="item.name"></v-text-field>
            <v-text-field v-model="item.description"></v-text-field>
             <v-text-field v-model="item.price"></v-text-field>
            <v-btn color="green" @click="updateItem()"
            @click.stop="dialog = false">
                Edit Item
            </v-btn>
            <v-btn color="red" @click.stop="dialog = false">
                Close
            </v-btn>
        </div>
      </v-card>
    </v-dialog>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
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

  #item_table {
    padding-bottom: 5px;
  }

  #item_description {
    font-style: italic;
    font-weight: 300;
    font-size: 13px;
  }
</style>


<script>
/*eslint-disable*/
import { dbMenuAdd} from '../../firebase'


  export default {
    data () {
        return {
      basket: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      updatedSucces: false,
      updatedText: 'Menu item has been updated!'
      }
    },
    beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },
    methods: {
      editItem(item) {
        this.item = item
        this.activeEditItem = item.id
      },
      updateItem() {

          dbMenuAdd.doc(this.activeEditItem).update(this.item).then(() => {
            this.updatedSucces = true;
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
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
      menuItems() {
        return this.$store.getters.getMenuItems
      },
      subTotal () {
        var subCost = 0;
        for (var items in this.basket) {
          var individualItem = this.basket [items];
          subCost += individualItem.quantity + individualItem.price;
        }
        return subCost
      },
      total () {
        var deliveryPrice = 20;
        var totalCost = this.subTotal
        return totalCost + deliveryPrice
      }
    }
  }
</script>
