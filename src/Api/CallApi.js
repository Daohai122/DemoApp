import mushroom from "mushroomjs";
import "mushroomjs-auth-rn";
import LinkApi from "../Config/ServerConfig";

mushroom.$using(LinkApi);
export default mushroom;