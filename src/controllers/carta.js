const naipe_controller = require("./naipe.js");
const db = [];
let proximoId = 1;

const model = (cartas, id = proximoId++) => {
  if (
    cartas.nome != undefined &&
    cartas.nome != "" &&
    cartas.naipe_id != undefined &&
    naipe_controller.show(carta.naipe_id)
  ) {
    return {
      id,
      nome: cartas.nome,
      naipe_id,
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
