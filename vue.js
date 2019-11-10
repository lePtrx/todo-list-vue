var todoList = new Vue({
  el: "#todo",
  data: {
    addTodo: "",
    items: [
      {
        todos: "Drink coffee"
      },
      {
        todos: "Eat bread"
      },
      {
        todos: "Sleep more"
      }
    ]
  },
  methods: {
    addItem: function() {
      this.items.push({ todos: this.addTodo });
    },
    deleteTodo: function(item) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }
});
