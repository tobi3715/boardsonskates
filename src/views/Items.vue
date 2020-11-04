<template>
  <v-container>

      <v-snackbar
      top
      v-model="addedSuccess"
    >
      {{ addedText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="addedSuccess = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-row>
      <v-col>
        <h1>Items</h1>
        <div id="info" class="pa-2">
    <v-simple-table id="item_table">
      <template v-slot:default>
        <thead>
          <th id="btn_space">
            <div class="gender_filter">
              <v-btn id="gender_btn">filter</v-btn>
              <div class="gender_filter-content">
                <a  @click="filterAll()">All</a>
                <a  @click="filterIllustrations()">Illustrations</a>
                <a  @click="filterThemes()">Themes</a>
            </div>
            </div>
          </th>
          <tr>
            <th style="width:10%"></th>
            <th class="text-left" style="width:60%">Name</th>
            <th class="text-left" style="width:100px">Price</th>
            <th class="text-left" style="width:100px">Add to basket</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemFilter" :key="item.name">
            <td id="td_size">
              <v-img  id="td_menuItem_img" v-bind:src="item.image"></v-img>
            </td>
            <td>
              <span id="td_name">{{ item.name }}</span><br>
              <span id="item_description">{{ item.description }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn text @click="addToBasket(item)">
                <v-icon color="white">add_box</v-icon>
              </v-btn>
            </td>
          </tr>
          <v-row class="mr-16 mb-4 mt-4 justify-end">
           <router-link to="/basket"><v-btn class="ml-5" color="blue">go to basket</v-btn></router-link>
          </v-row> 
        </tbody>
      </template>
    </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
import { dbMenuAdd} from '../../firebase'


  export default {
    data () {
        return {
      filterValue: '',
      basketDump: [],
      /*items: [],*/
      addedSuccess: false,
      addedText: 'An item has been added to the basket!'
      }
    },
    /* created() {
      dbMenuAdd.get().then((querySnapshot) => {
        querySnapshot.forEach((doc => {
          console.log(doc.id, " => ", doc.data());
          var menuItemData = doc.data();
          this.menuItems.push({
            id: doc.id,
            name: menuItemData.name,
            description: menuItemData.description,
            price: menuItemData.price
          })
        }))
      })
    }, */
    beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },
    methods: {
      filterAll() {
        this.filterValue = ''
      },
      filterIllustrations() {
        this.filterValue = 'illustration'
      },
      filterThemes() {
        this.filterValue = 'theme'
      },
      addToBasket(item) {
        /* if (this.basket.find(itemInArray => item.name === itemInArray.name)) {
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
      } */
      this.basketDump.push({
          name: item.name,
          price: item.price,
          quantity: 1,
        });
        this.$store.commit('addBasketItems', this.basketDump);
        this.basketDump = [];
        this.addedSuccess = true;
      },
    },
    computed: {
      itemFilter () {
        return this.menuItems.filter(filterI => filterI.filter.includes(this.filterValue))
      },
      basket () {
        // return this.$store.sate.basketItems
        return this.$store.getters.getBasketItems
      },
    menuItems () {
        // return this.$store.sate.basketItems
        return this.$store.getters.getMenuItems
      },
    }
  
  }
</script>

<style lang="scss" scoped>
  #info {
    color: black;
  }

  h1 {
    text-shadow: 3px 3px 3px black;
    font-size: 40px;
  }

  /* Dropdown Button */
  #btn_space {
  width: 100%;
  display: flex;
  padding-top: 25px;
  padding-left: 20%;
}

#gender_btn {
  border: 1px white solid;
  border-radius: 5px;
  color: white;
  padding: 12px;
  font-size: 16px;
  height: 5px;
}

/* The container <div> - needed to position the dropdown content */
.gender_filter {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.gender_filter-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  z-index: 1;
  border: 1px black solid;
}

/* Links inside the dropdown */
.gender_filter-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.gender_filter-content a:hover {background-color: white;}

/* Show the dropdown menu on hover */
.gender_filter:hover .gender_filter-content {display: block; }

/* Change the background color of the dropdown button when the dropdown content is shown */
.gender_filter:hover .dropbtn {background-color: white; }

  tr th {
    font-weight: 300;
  }

  #td_name {
    font-weight: bolder;
  }

  tr td {
    padding: 10px 10px 10px 16px;
  }


  #td_menuItem_img {
    max-width: 100px;
    max-height: 100px;
  }

  #item_description {
    font-style: italic;
    font-weight: 300;
    font-size: 13px;
  }
</style>
