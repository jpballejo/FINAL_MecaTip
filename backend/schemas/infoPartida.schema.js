const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var infoPartida = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  idInfoPartida: {
    type: String,
    index: true
  },
  creador: {
    type: String
  },
  contrincantes: [String],
  idPartida: {
    type: String,
  },
  puntos_ganados: {
    type: Number,
    default: 0
  },
  puntos_perdidos: {
    type: Number,
    default: 0
  },
  puntos_plus: {
    type: Number,
    default: 0
  },
  nivelAlcanzado: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    default: 1
  },
  created: {
    type: Date,
    default: Date.now
  },
  isOcultar: {
    type: Boolean,
    default: false
  },
  jugada: {
    type: Boolean,
    default: true
  }
});
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////***************FUNCIONES************//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////*************************///////////////////////////////////////////////////////////////////
//
module.exports = infoPartida;
