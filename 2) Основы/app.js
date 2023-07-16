const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2'],
            invalidInput: false
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = ''
            }
        },
        deleteNewNote(index) {
          this.notes.splice(index, 1);
        },
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed');
            return this.notes.length * 2;
        },
        messageValidate() {
            return 'Пожалуйста, введите в начале +992';
        }
    },
    watch: {
        inputValue(value) {
            if (!value.startsWith("+992") && value !== "") {
                this.invalidInput = true;
            } else {
                this.invalidInput = false;
            }
        },
    },
}

Vue.createApp(App).mount('#app');


