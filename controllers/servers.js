let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Google Cloud', status: 'working'},
    {id: '3', name: 'Yandex Cloud', status: 'working'},
    {id: '4', name: 'Microsoft', status: 'pending'},
]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}

export const remove = (req, res) => {
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({message: 'Server has been removed.'})
}

export const edit = (req, res) => {
    // find index
    let objIndex = servers.findIndex(obj => obj.id === req.body.id)

    servers[objIndex].name = req.body.newName

    res.json({message: 'Server has been edited.'})
}

export const getItemById = (req, res) => {
    let found = servers.find(obj => obj.id === req.params.id)
    res.status(200).json(found)
}
