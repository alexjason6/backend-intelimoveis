const db = require('../../database/index');

class ComodidadesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM comodidades');

    return rows;
  }

  async create(nome) {
    const [row] = await db.query(
      `
    INSERT INTO comodidades(
      nome
    )
    VALUES($1)
    RETURNING *
    `,
      [nome],
    );

    return row;
  }

  async update(id, { nome }) {
    const [row] = await db.query(`
    UPDATE comodidades
    SET nome = $1
    WHERE id = $2
    RETURNING *
    `, [nome, id]);

    return row;
  }

  async delete(id) {
    const deleteComodidade = await db.query('DELETE FROM comodidades WHERE id = $1', [id]);

    return deleteComodidade;
  }
}

module.exports = new ComodidadesRepository();
