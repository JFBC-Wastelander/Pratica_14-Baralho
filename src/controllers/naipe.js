const db = [];
let proximoId = 1;

const model = (naipe, id = proximoId++) => {
  if (naipe.nome != undefined && naipe.nome != "") {
    return {
      id,
      nome: naipe.nome,
    };
  }
};

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  const indexx = db.findIndex((el) => el.id == id);

  if (indexx != -1) {
    db.splice(indexx, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
