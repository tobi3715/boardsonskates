<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Add New Item</h1>
        <div  class="pa-2">
          <v-simple-table id="info">
            <v-text-field label="Name of Skateboard" required v-model="name">
          
            </v-text-field>
            <v-text-field label="Description" required v-model="description">
          
            </v-text-field>
            <v-text-field label="Price" required v-model="price">
          
            </v-text-field>
            
            <v-file-input label="file input" @change="uploadImage"></v-file-input>

            <v-btn color="green" @click="addNewMenuItem()" :disabled="btnDisable">
                Add Item
            </v-btn>
            <v-btn color="red">
                Cancel
            </v-btn>
            </v-simple-table>
        </div>
      </v-col>
      <v-col>
          <h1>Preview</h1>
          <div class="pa-2">
            <v-simple-table id="menu-table">
                <thead>
                    <tr>
                        <th class="text-left" style="width:70%">Name</th>
                        <th class="text-left" style="width:100px">Price DKK</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span id="td_name">{{name}}</span> <br>
                            <span id="item_description">{{description}}</span>
                        </td>
                        <td id="preview_menuitem_price">
                            <span>{{price}}</span>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
#info {
  padding: 10px;
  border-radius: 5px 5px 5px 5px;
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

#item_description {
  font-style: italic;
  font-weight: 300;
  font-size: 13px;
}
</style>


<script>
/*eslint-disable*/
import { dbMenuAdd, fb} from '../../../firebase'

  export default {
    data () {
        return {
            name: '',
            description: '',
            price: '',
            image: null,
            btnDisable: true,
        }
    },
    methods: {
      uploadImage(e) {
        let file = e;
        console.log(e);
        var storageRef = fb.storage().ref('products/'+ file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on('state_changed', (snapshot) => {
 
        }, (error) => {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.image = downloadURL;
            this.btnDisable = false;
            console.log('File available at', downloadURL);
          });
         });
        
      },
        addNewMenuItem() {
            dbMenuAdd.add({
                name: this.name,
                description: this.description,
                price: this.price,
                image: this.image,
            })
        }
    }
  }
</script>
