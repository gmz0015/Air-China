package com.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.pojo.Crew;
import com.service.CrewService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@Controller
@RequestMapping("/api/crew")
public class CrewController {
    private static final long EXPIRE_TIME = 15 * 60 * 1000;
    private static final String TOKEN_SECRET = "sd8g97b87b98a7f897b8a6f786db0a7a5";

    @Autowired
    private CrewService crewService;

//    @RequestMapping("/allCrew")
    @RequestMapping(value = "allCrew", method = RequestMethod.GET)
    @ResponseBody // 要返回json数据
    public JSONObject list(Model model) {
        JSONArray jsonArray = new JSONArray();
        JSONObject jsonObject = new JSONObject();
        List<Crew> crewList = crewService.queryAllCrew();
        int i=0;
        for (Crew crew:crewList){
            jsonObject.element("crew" + (i++), crew);

        }
        System.out.println("list is: " + jsonObject);

//        model.addAttribute("list", list);
        return jsonObject;
    }

    @RequestMapping("/authentication")
    @ResponseBody // 要返回json数据
    public JSONObject authentication(@RequestParam(value = "callsign", required = true) String callsign, @RequestParam(value = "password", required = true) String password) {
        JSONObject jsonObject = new JSONObject();
        Crew crew = crewService.authentication(callsign);

        // Set Token
        Date date = new Date(System.currentTimeMillis() + EXPIRE_TIME);
        Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
        Map<String, Object> header = new HashMap<>(2);
        header.put("typ", "JWT");
        header.put("alg", "HS256");

        if (!(password.equals(crew.getPassword()))) {
            jsonObject.put("code", 60204);
            jsonObject.put("message", "Account and password are incorrect.");
            return jsonObject;
        }else if (crew.getAdministrator() == 1){
            long time = System.currentTimeMillis();
            jsonObject.put("code", 20000);
            String token = JWT.create()
                    .withHeader(header)
                    .withClaim("callsign", callsign)
                    .withClaim("roles", "admin")
                    .withExpiresAt(date)
                    .sign(algorithm);
            jsonObject.put("token", token);
            return jsonObject;
        }else if (crew.getAdministrator() == 0){
            long time = System.currentTimeMillis();
            jsonObject.put("code", 20000);
            String token = JWT.create()
                    .withHeader(header)
                    .withClaim("callsign", callsign)
                    .withClaim("roles", "member")
                    .withExpiresAt(date)
                    .sign(algorithm);
            jsonObject.put("token", token);
            return jsonObject;
        }else {
            jsonObject.put("code", 60204);
            jsonObject.put("message", "There is not the user.");
            return jsonObject;
        }
    }

    @RequestMapping("/authorisation")
    @ResponseBody // 要返回json数据
    public JSONObject authorisation(@RequestParam(value = "token", required = true) String token) {
        JSONObject jsonObject = new JSONObject();
        Formatter formatter = new Formatter();
        String callsign;
        String roles;

        try {
            Algorithm algorithm = Algorithm.HMAC256(TOKEN_SECRET);
            JWTVerifier verifier = JWT.require(algorithm).build();
            DecodedJWT jwt = verifier.verify(token);
            callsign = jwt.getClaim("callsign").asString();
            roles = jwt.getClaim("roles").asString();
            jsonObject.put("callsign", callsign);
            jsonObject.put("roles", roles);
        } catch (Exception e) {
            System.out.println("Catch a Exception: " + e);
        }
        return jsonObject;
    }

    @RequestMapping("toAddCrew")
    public String toAddCrew() {
        return "addCrew";
    }

    @RequestMapping("/addCrew")
    public String addCrew(Crew crew) {
        crewService.addCrew(crew);
        return "redirect:/crew/allCrew";
    }

    @RequestMapping("/del/{crewCallsign}")
    public String deleteCrew(@PathVariable("crewCallsign") int callsign) {
        crewService.deleteCrewByCallsign(callsign);
        return "redirect:/crew/allCrew";
    }

    @RequestMapping("toUpdateCrew")
    public String toUpdateCrew(Model model, int callsign) {
        model.addAttribute("crew", crewService.queryByCallsign(callsign));
        return "updateCrew";
    }

    @RequestMapping("/updateCrew")
    public String updateCrew(Model model, Crew crew) {
        crewService.updateCrew(crew);
        crew = crewService.queryByCallsign(crew.getCallsign());
        model.addAttribute("crew", crew);
        return "redirect:/crew/allCrew";
    }
}
