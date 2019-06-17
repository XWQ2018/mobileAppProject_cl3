import service from "@/untils/request";
export default {
    getLoginInfo(params) {
        return service.post("/api/login.php", params);
    }
};
