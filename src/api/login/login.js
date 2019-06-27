import service from "@/untils/request";
export default {
    getLoginInfo() {
        return service.post("/user/userInfo");
    }
};
