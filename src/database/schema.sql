CREATE DATABASE intelimoveis;

CREATE TABLE IF NOT EXISTS comodidades (
  id SERIAL UNIQUE,
  nome VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS proprietarios (
  id_proprietario SERIAL UNIQUE,
  nome VARCHAR NOT NULL,
  telefone VARCHAR,
  whatsapp VARCHAR,
  email VARCHAR,
  cpf_cnpj VARCHAR NOT NULL UNIQUE,
  rg VARCHAR NOT NULL,
  nascimento VARCHAR NOT NULL,
  logradouro VARCHAR NOT NULL,
  numero VARCHAR NOT NULL,
  complemento VARCHAR,
  bairro VARCHAR NOT NULL,
  cidade VARCHAR NOT NULL,
  estado VARCHAR NOT NULL,
  imoveis VARCHAR [],
  data_cadastro TIMESTAMP NOT NULL,
  data_alteracao TIMESTAMP
);

CREATE TABLE IF NOT EXISTS imoveis (
  cod_imovel SERIAL UNIQUE,
  numero_registro VARCHAR,
  tipo VARCHAR NOT NULL,
  nome VARCHAR NOT NULL,
  situacao VARCHAR NOT NULL,
  tipo_negocio VARCHAR NOT NULL,
  rua VARCHAR NOT NULL,
  numero VARCHAR NOT NULL,
  complemento VARCHAR,
  bairro VARCHAR NOT NULL,
  cidade VARCHAR NOT NULL,
  estado VARCHAR NOT NULL,
  comodidades VARCHAR [],
  valor VARCHAR NOT NULL,
  metragem VARCHAR,
  quartos VARCHAR,
  vagas VARCHAR,
  descricao VARCHAR,
  cpf_cnpj_proprietario VARCHAR NOT NULL,
  data_cadastro TIMESTAMP NOT NULL,
  data_alteracao TIMESTAMP,
  data_vencimento_pagamento VARCHAR NOT NULL,
  FOREIGN KEY(cpf_cnpj_proprietario) REFERENCES proprietarios(cpf_cnpj)
);

CREATE TABLE IF NOT EXISTS clientes (
  id_cliente SERIAL UNIQUE,
  nome VARCHAR NOT NULL,
  telefone VARCHAR,
  whatsapp VARCHAR,
  email VARCHAR,
  cpf_cnpj VARCHAR NOT NULL UNIQUE,
  rg VARCHAR NOT NULL,
  nascimento VARCHAR NOT NULL,
  endereco VARCHAR NOT NULL,
  imovel_locado VARCHAR [],
  nome_fiador_renda VARCHAR,
  cpf_cnpj_fiador_renda VARCHAR,
  rg_fiador_renda VARCHAR,
  endereco_fiador_renda VARCHAR,
  renda_fiador_renda VARCHAR,
  nome_fiador_imovel VARCHAR,
  cpf_cnpj_fiador_imovel VARCHAR,
  rg_cnpj_fiador_imovel VARCHAR,
  endereco_fiador_imovel VARCHAR,
  numero_registro_imovel_fiador VARCHAR,
  renda_cliente VARCHAR,
  nome_conjuge VARCHAR,
  cpf_conjuge VARCHAR,
  valor_calcao VARCHAR,
  data_cadastro TIMESTAMP NOT NULL,
  data_alteracao TIMESTAMP
);

CREATE TABLE IF NOT EXISTS imobiliaria (
  id_imobiliaria SERIAL UNIQUE,
  nome VARCHAR NOT NULL,
  telefone VARCHAR,
  whatsapp VARCHAR,
  email VARCHAR,
  cnpj VARCHAR NOT NULL UNIQUE,
  senha VARCHAR NOT NULL,
  endereco VARCHAR NOT NULL,
  creci VARCHAR [],
  data_cadastro TIMESTAMP NOT NULL,
  data_alteracao TIMESTAMP
);

