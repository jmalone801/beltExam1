const PetsController = require('../controllers/pets.controller');

module.exports = function (app) {
    // creates one new pet
    app.post('/pets/new', PetsController.createPets);

    // Returns all pets
    app.get("/pets/all", PetsController.findAllPets);

    // Returns one pet
    app.get('/pet/:_id', PetsController.getOnePet);

    // Updates one pet
    app.put("/pet/update/:_id", PetsController.updateExistingPet);

    // Deletes one pet
    app.delete("/pet/delete/:_id", PetsController.deletePet);
}
