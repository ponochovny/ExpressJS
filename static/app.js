// const App = {
//     data() {
//         return {
//             servers: []
//         }
//     },
//     async mounted() {
//         const res = await fetch('/api/server')
//         this.servers = await res.json()
//     }
// }

// import { remove } from "../controllers/servers"

// Vue.createApp(App).mount('#app')

// alert(1)

var app = new Vue({
    el: '#app',
    data: {
        servers: [],
        name: '',
        currentServerId: '',
        newName: ''
    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    },
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'created',
            }

            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newServer = await res.json()
            this.servers.push(newServer)
        },
        async remove(id) {
            await fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        },
        async edit(id, newName) {
            const data = {
                id,
                newName
            }

            await fetch(`/api/server/${id}`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            // find index
            objIndex = this.servers.findIndex((obj => obj.id === id))

            this.servers[objIndex].name = newName
        },
        async getItemById(id) {
            const res = await fetch(`/api/server/${id}`)
            let result = await res.json()

            console.log('result:', result)
        }
    }
})