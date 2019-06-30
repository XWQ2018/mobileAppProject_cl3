import service from "@/untils/request";
export default {
    createUser(params) {
        return service.post("/user/createUser", params);
    }
};
