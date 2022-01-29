const app = Vue.createApp({

    data() {
        return {
            inputTask: "",
            tasks: [],
            finishedTasks: [],
            clicks: 0,
            timer: null,
        };
    },

    methods: {
        addTask() {

            if (this.inputTask) {
                if (!this.tasks.includes(this.inputTask)) {
                    this.tasks.push(this.inputTask);
                }
                this.inputTask = ''
            }
        },
// Removing the done tasks from the to-do array and populating the finished array
        removeTask(index) {

            this.finishedTasks.push(...this.tasks.splice(index, 1))
        },
// Handling the click events on the finished tasks section.
        oneClick(index) {
            this.clicks++;
            if (this.clicks == 1) {
                this.timer = setTimeout(() => {
                    this.clicks = 0;
                    this.tasks.push(...this.finishedTasks.splice(index, 1));
                    console.log("this.timer")
                    
                }, 350);

                return;
            } 
            
                clearTimeout(this.timer);
                this.clicks = 0;
                this.finishedTasks.splice(index, 1);
                console.log("clicked twice") 

            }

        },
   
});
app.mount('#todoApp')