const ProprietariosRepository = require('../repositories/ProprietariosRepository');

class ProprietarioController {
  async index(request, response) {
    const { orderByName } = request.query;
    const proprietarios = await ProprietariosRepository.findAll(orderByName);

    response.json(proprietarios);
  }

  async showProprietario(request, response) {
    const { id_proprietario } = request.params;
    const proprietario = await ProprietariosRepository.findById(id_proprietario);

    if (!proprietario) {
      return response.status(404).json({ error: 'Proprietário não encontrado.' });
    }

    response.json(proprietario);
  }

  async showProprietarioCpfCnpj(request, response) {
    const { cpf_cnpj_proprietario } = request.params;
    const proprietario = ProprietariosRepository.findByCpfCnpj(cpf_cnpj_proprietario);

    if (!proprietario) {
      return response.status(404).json({ error: 'Proprietário não encontrato' });
    }

    response.json(proprietario);
  }

  async create(request, response) {

    const {
      nome,
      telefone,
      whatsapp,
      email,
      cpf_cnpj,
      rg,
      nascimento,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      imoveis,
      data_cadastro,
      data_alteracao
    } = request.body;

    const proprietario = await ProprietariosRepository.create({
      nome,
      telefone,
      whatsapp,
      email,
      cpf_cnpj,
      rg,
      nascimento,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      imoveis,
      data_cadastro,
      data_alteracao
    });

    response.json(proprietario);
  }

  async update(request, response) {
    const { id_proprietario } = request.params;

    const {
      nome,
      telefone,
      whatsapp,
      email,
      cpf_cnpj,
      rg,
      nascimento,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      imoveis,
      data_cadastro,
      data_alteracao
    } = request.body;

    const proprietarioExists = await ProprietariosRepository.findById(id_proprietario);

    if (!proprietarioExists) {
      return response.status(404).json({ error: 'Proprietário não encontrado.' });
    }

    const proprietario = await ProprietariosRepository.update(id_proprietario, {
      nome,
      telefone,
      whatsapp,
      email,
      cpf_cnpj,
      rg,
      nascimento,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      imoveis,
      data_cadastro,
      data_alteracao
    });

    response.json(proprietario);
  }

  async delete(request, response) {
    const { id_proprietario } = request.params;

    await ProprietariosRepository.delete(id_proprietario);

    response.sendStatus(204);
  }
}

module.exports = new ProprietarioController();
