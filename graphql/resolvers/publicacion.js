import { Publicaciones } from "../../db";

export const resolvers = {
  Query: {
    getPublicaciones: async () => {
      const res = await Publicaciones.find();
      return res;
    },
    getUsuario: async (root, { id }) => {
      const res = await Publicaciones.findById({ _id: id });
      if (!res) throw new Error("Usuario no encontrado");
      return res;
    },
    totalPublicaciones: async root => {
      const res = await Publicaciones.countDocuments({});
      if (!res) throw new Error("Ha ocurrido un error");
      return res;
    }
  },
  Mutation: {
    addPublicacion: async (root, { input }) => {
      const res = await Publicaciones.create(input);
      if (!res) throw new Error("Ha ocurrido un error");
      return res;
    },
    modPublicacion: async (root, { input }) => {
      const res = await Publicaciones.findOneAndUpdate({ _id: input.id }, input, {
        new: true
      });
      if (!res) throw new Error("Ha ocurrido un error");
      return await res;
    },
    delPublicacion: async (root, { id }) => {
      const res = await Publicaciones.findOneAndDelete({ _id: id });
      if (!res) throw new Error("Ha ocurrido un error");
      return `Registro eliminado correctamente`;
    }
  }
};
