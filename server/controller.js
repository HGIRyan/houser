module.exports = {
    // GET
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => console.log('Error', err))
    },
    createHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        const { property_name, address, city, state, zipcode, monthly_rent,imglink, desired_rent  } = req.body
        dbInstance.create_house([property_name, address, city, state, zipcode, monthly_rent, imglink, desired_rent ])
            .then(() => res.sendStatus(200))
            .catch(err => console.log('Error', err))
    },
    deleteHouse: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.delete_house(req.params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'You suck' }, console.log(err))
            })
    }
}