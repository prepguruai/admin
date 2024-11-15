import { ProfileClient } from "../generated/ProfileServiceClientPb";
import { UserProfileProto, IdRequest } from "../generated/profile_pb";
import { Metadata } from "grpc-web";
import { SERVICE_HOST, TENANT } from "./constants";
import { StatClient } from "../generated/StatsServiceClientPb";
import { StatRequest, Stats } from "../generated/stats_pb";


var profileClient = new ProfileClient(SERVICE_HOST);
var statsClient = new StatClient(SERVICE_HOST);

const authToken = localStorage.getItem('token');
const metadata: Metadata = { 'Authorization': `Bearer ${authToken}` };

async function GetProfile(userId: string = "") : Promise<UserProfileProto> {
    var profileReq = new IdRequest();
    profileReq.setUserid(userId);
    var res = await profileClient.getProfile(profileReq, metadata);
    return res;
}

async function GetStats(userId: string = "") : Promise<Stats> {
    var statReq = new StatRequest();
    statReq.setUserid(userId);
    statReq.setTenant(TENANT);

    var res = await statsClient.getStats(statReq, metadata);
    return res;
}

export { GetProfile, GetStats }