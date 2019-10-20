var app = new Vue({
    el: '#app',
    data: {
        to_do: null,
        to_do_list: [],
        errors: null
    },
    methods: {
        onSubmit(){
            if (this.to_do) {
                let new_to_do = this.to_do;
                this.to_do_list.push(new_to_do);
                this.to_do = null;

                if (this.errors) {
                    this.errors = null;
                }
            } else {
                this.errors = "To do field cannot be empty!";
            }
        },
        removeFromList(){
            this.to_do_list.pop();
            }
        }
    }
)