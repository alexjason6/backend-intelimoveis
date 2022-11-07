const ComodidadesRepository = require('../repositories/ComodidadesRepository');

class ComodidadeController {
  async index(request, response) {
    const comodidades = await ComodidadesRepository.findAll();

    response.json(comodidades);
  }

  async create(request, response) {
    const {
      nome,
    } = request.body;

    const comodidade = await ComodidadesRepository.create({ nome });

    response.json(comodidade);
  }

  async update(request, response) {
    const { id } = request.params;

    const {
      nome,
    } = request.body;

    const comodidadeExists = await ComodidadesRepository.findById(id);

    if (!comodidadeExists) {
      return response.status(400).json({ error: 'Comodidade não encontrada.' });
    }

    const comodidade = await ComodidadesRepository.update(id, {
      nome,
    });

    response.json(comodidade);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ComodidadesRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ComodidadeController();
