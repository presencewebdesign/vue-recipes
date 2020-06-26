<template>
   <div class="index container">
      <div class="row">
         <div class="col-md-4" v-for="(recipe, index) in recipes" :key="index">
            <div class="card">
               <div class="card-content">
                  <i
                     class="material-icons delete"
                     @click="deleteRecipe(recipe.id)"
                     >delete</i
                  >
                  <h2 class="indigo-text">{{ recipe.title }}</h2>
                  <ul class="recipes">
                     <li
                        v-for="(ing, index) in recipe.ingredients"
                        :key="index"
                     >
                        <span class="chip">{{ ing }}</span>
                     </li>
                  </ul>
               </div>
               <span
                  class="btn-floating btn-large halfway-fab pink"
                  @click="EditRecipe(recipe.slug)"
               >
                  <i class="material-icons edit">edit</i>
               </span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import db from "../firebase/init"
export default {
   name: "Recipes",
   data() {
      return {
         recipes: [],
      }
   },
   methods: {
      deleteRecipe(id) {
         db.collection("recipes")
            .doc(id)
            .delete()
            .then(() => {
               this.recipes = this.recipes.filter((recipe) => {
                  return recipe.id != id
               })
            })
      },
      EditRecipe(id) {
         this.$router.push(`/edit/${id}`)
      },
   },
   created() {
      // fetch data from firestore
      db.collection("recipes")
         .get()
         .then((snapshot) => {
            snapshot.forEach((doc) => {
               let recipe = doc.data()
               recipe.id = doc.id
               this.recipes.push(recipe)
            })
         })
   },
}
</script>

<style scoped>
.index {
   margin-top: 50px;
}

.index h2 {
   font-size: 1.8ems;
   text-align: center;
   margin-top: 0px;
}

.index .recipes li {
   display: inline-block;
}
.index .delete {
   position: absolute;
   top: 4px;
   right: 4px;
   cursor: pointer;
   color: #aaa;
   font-size: 1.4em;
}
</style>
