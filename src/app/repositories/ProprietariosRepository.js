const db = require('../../database');

class ProprietariosRepository {
  async findAll(orderByName = 'ASC') {
    const direction = orderByName === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`SELECT * FROM proprietarios ORDER BY nome ${direction}`);

    return rows;
  }

  async findById(id_proprietario) {

    const [row] = await db.query(`SELECT * FROM proprietarios WHERE id_proprietario = $1`, [id_proprietario]);

    return row;
  }

  async findByCpfCnpj(cpf_cnpj_proprietario) {
    const [row] = db.query('SELECT * FROM proprietarios WHERE cpf_cnph = $1', [cpf_cnpj_proprietario]);

    return row;
  }

  async create({
    nome, telefone, whatsapp, email, cpf_cnpj, rg, nascimento, logradouro, numero, complemento, bairro, cidade, estado, imoveis, data_cadastro, data_alteracao
  }) {
    const [row] = await db.query(
      `INSERT INTO proprietarios(
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
    )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    `,
      [
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
      ],
    );

    return row;
  }

  async update(id_proprietario, {
    nome, telefone, whatsapp, email, cpf_cnpj, rg, nascimento, logradouro, numero, complemento, bairro, cidade, estado, imoveis, data_cadastro, data_alteracao
  }) {

    const [row] = await db.query(
      `UPDATE proprietarios
      SET nome = $1, telefone = $2, whatsapp = $3, email = $4, cpf_cnpj = $5, rg = $6, nascimento = $7, logradouro = $8, numero = $9, complemento = $10, bairro = $11, cidade = $12, estado = $13, imoveis = $14, data_cadastro = $15, data_alteracao = $16
      WHERE id_proprietario = $17
      RETURNING *
    `,
      [
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
        data_alteracao,
        id_proprietario,
      ]
    );

    return row;
  }

  async delete(id_proprietario) {
    const deleteProprietario = await db.query('DELETE FROM proprietarios WHERE id_proprietario = $1', [id_proprietario]);
    return deleteProprietario;
  }
}

module.exports = new ProprietariosRepository();
