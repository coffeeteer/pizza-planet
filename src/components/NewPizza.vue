<template>
    <div>
        <form action="">
            <h3>Add new pizza:</h3>

            <div class="form-group row">
                <label class="col-sm-3">Name</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newPizza.name">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3">Description</label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" row="5" v-model="newPizza.description"></textarea>
                </div>
            </div>

            <p><strong>Option 1:</strong></p>
            <div class="form-group row">
                <label class="col-sm-3">Size ("")</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" row="5" v-model="newPizza.options[0].size"> 
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3">Price</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" row="5" v-model="newPizza.options[0].price" > 
                </div>
            </div>

            <p><strong>Option 2:</strong></p>
            <div class="form-group row">
                <label class="col-sm-3">Size ("")</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" row="5" v-model="newPizza.options[1].size"> 
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3">Price</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" row="5" v-model="newPizza.options[1].price"> 
                </div>
            </div>
            <div class="form-group row">
                <button type="button" class="btn btn-success btn-block" @click="addMenuItem">Add to Firebase</button>
            </div>
        </form>
    </div>
</template>

<script>
import { dbMenuRef } from '../../../firebaseConfig'
export default{
    data(){
        return{
            newPizza:{
                'name': 'Margherita',
                'description': 'A delicious tomato based pizza topped with mozzarella',
                'options': [{
                    'size': 9,
                    'price': 6.95
                }, {
                    'size': 12,
                    'price': 10.95
                }]
            }  
        }
    },
    methods: {
        addMenuItem() {
            window.console.log(this.newPizza)
            dbMenuRef.push(this.newPizza)
        }
    }
}
</script>