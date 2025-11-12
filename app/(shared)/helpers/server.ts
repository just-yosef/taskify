import { cookies } from "next/headers";
import { decodeUserFromToken as _decodeUserFromToken } from "./decodeUser";

// Server-only helpers. Import these explicitly from server.ts in server/edge code
// and server components to avoid pulling server-only APIs into client bundles.
export const IsLoggedIn = async () => !!(await cookies()).get("user")?.value;

export const decodeUserFromToken = _decodeUserFromToken;
export { decodeUserFromToken as decodedUser };

export default {
  IsLoggedIn,
  decodedUser: decodeUserFromToken,
};
