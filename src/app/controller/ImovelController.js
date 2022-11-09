const ImoveisRepository = require('../repositories/ImoveisRepository');

class ImoveisControler {
  async index(request, response) {
    const { orderByValue } = request.query;
    const imoveis = await ImoveisRepository.findAll(orderByValue);

    response.json(imoveis);
  }

  async showImovel(request, response) {
    const { cod_imovel } = request.params;
    const imovel = await ImoveisRepository.findByCode(cod_imovel);

    if (!imovel) {
      return response.status(404).json({ error: 'Imóvel não encontrado.' });
    }

    response.json(imovel);
  }

  async showSearch(request, response) {
    const {tipo_negocio, tipo_imovel, bairro, cidade } = request.params;

    const orderByValue = request.query;
    const imoveisByBairro = await ImoveisRepository.findBySearch(tipo_negocio, tipo_imovel, bairro, cidade, orderByValue);

    if (!imoveisByBairro) {
      return response.status(404).json({ error: 'Nenhum imóvel encontrado.' });
    }

    response.json(imoveisByBairro);
  }

  async showByTipo(request, response) {
    const { tipo } = request.params;
    const orderByValue = request.query;
    const imoveisByTipo = await ImoveisRepository.findByTipo(tipo, orderByValue);

    if (!imoveisByTipo) {
      return response.status(404).json({ error: 'Nenhum imóvel encontrado.' });
    }

    response.json(imoveisByTipo);
  }

  async create(request, response) {
    const {
      numero_registro,
      tipo_imovel,
      nome,
      situacao,
      tipo_negocio,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      comodidades,
      valor,
      metragem,
      quartos,
      vagas,
      descricao,
      cpf_cnpj_proprietario,
      data_cadastro,
      data_alteracao,
      data_vencimento_pagamento,
    } = request.body;

    const imovel = await ImoveisRepository.create({
      numero_registro,
      tipo_imovel,
      nome,
      situacao,
      tipo_negocio,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      comodidades,
      valor,
      metragem,
      quartos,
      vagas,
      descricao,
      cpf_cnpj_proprietario,
      data_cadastro,
      data_alteracao,
      data_vencimento_pagamento,
    });

    response.json(imovel);
  }

  async update(request, response) {
    const { cod_imovel } = request.params;

    const {
      numero_registro,
      tipo_imovel,
      nome,
      situacao,
      tipo_negocio,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      comodidades,
      valor,
      metragem,
      quartos,
      vagas,
      descricao,
      cpf_cnpj_proprietario,
      data_cadastro,
      data_alteracao,
      data_vencimento_pagamento,
    } = request.body;

    const imovelExists = await ImoveisRepository.findByCode(cod_imovel);

    if (!imovelExists) {
      return response.status(400).json({ error: 'Imóvel não encontrado.' });
    }

    const imovel = await ImoveisRepository.update(cod_imovel, {
      numero_registro,
      tipo_imovel,
      nome,
      situacao,
      tipo_negocio,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      comodidades,
      valor,
      metragem,
      quartos,
      vagas,
      descricao,
      cpf_cnpj_proprietario,
      data_cadastro,
      data_alteracao,
      data_vencimento_pagamento,
    });

    response.json(imovel);
  }

  async delete(request, response) {
    const { cod_imovel } = request.params;

    await ImoveisRepository.delete(cod_imovel);
    response.sendStatus(204);
  }
}

module.exports = new ImoveisControler();
