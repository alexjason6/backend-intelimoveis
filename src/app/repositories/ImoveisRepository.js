/* eslint-disable camelcase */
const db = require('../../database/');

class ImoveisRepository {
  async findAll(orderByValue = 'ASC') {
    const direction = orderByValue === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM imoveis ORDER BY valor ${direction}`);

    return rows;
  }

  async findByCode(cod_imovel) {
    const [row] = await db.query('SELECT * FROM imoveis WHERE cod_imovel = $1', [cod_imovel]);

    return row;
  }

  async findBySearch(tipo_negocio, tipo_imovel, bairro, cidade, orderByValue = 'ASC') {
    const direction = orderByValue === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM imoveis WHERE tipo_negocio = $1 AND tipo_imovel = $2 AND bairro ILIKE $3 AND cidade ILIKE $4 ORDER BY valor ${direction}`, [tipo_negocio, tipo_imovel, bairro, cidade]);

    return rows;
  }

  async findByTipo(tipo, orderByValue = 'ASC') {
    const direction = orderByValue === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM imoveis WHERE tipo = $1 ORDER BY valor ${direction}`, [tipo]);

    return rows;
  }

  async create({
    numero_registro, tipo_imovel, nome, situacao, tipo_negocio, rua, numero, complemento, bairro, cidade, estado, comodidades, valor, metragem, quartos, vagas, descricao, cpf_cnpj_proprietario, data_cadastro, data_alteracao, data_vencimento_pagamento
  }) {
    const [row] = await db.query(
      `INSERT INTO imoveis(
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
      data_vencimento_pagamento
    )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
    RETURNING *
    `,
      [
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
      ],
    );

    return row;
  }

  async update(cod_imovel, {
    numero_registro, tipo_imovel, nome, situacao, tipo_negocio, rua, numero, complemento, bairro, cidade, estado, comodidades, valor, metragem, quartos, vagas, descricao, cpf_cnpj_proprietario, data_cadastro, data_alteracao, data_vencimento_pagamento,
  }) {
    const [row] = await db.query(`
    UPDATE imoveis
    SET numero_registro = $1, tipo_imovel = $2, nome = $3, situacao = $4, tipo_negocio = $5, rua = $6, numero = $7, complemento = $8, bairro = $9, cidade = $10, estado = $11, comodidades = $12, valor = $13, metragem = $14, quartos = $15, vagas = $16, descricao = $17, cpf_cnpj_proprietario = $18, data_cadastro = $19, data_alteracao = $20, data_vencimento_pagamento = $21
    WHERE cod_imovel = $22
    RETURNING *
    `, [
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
      cod_imovel,
    ]);

    return row;
  }

  async delete(cod_imovel) {
    const deleteImovel = await db.query('DELETE FROM imoveis WHERE codigo = $1', [cod_imovel]);

    return deleteImovel;
  }
}

module.exports = new ImoveisRepository();
