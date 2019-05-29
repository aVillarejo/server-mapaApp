import { merge } from "lodash";
import { resolvers as USER_RESOLVERS } from "./usuario";
import { resolvers as PUBLICACION_RESOLVERS } from "./publicacion";

export const RESOLVERS = merge(USER_RESOLVERS,PUBLICACION_RESOLVERS);
