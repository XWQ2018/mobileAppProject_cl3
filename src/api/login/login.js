import service from "@/untils/request";
export default {
	getLoginInfo(params) {
		return service.post("/index.php", params);
	}
};
