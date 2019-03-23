package com.controller;

import com.pojo.Crew;
import com.service.CrewService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/crew")
public class CrewController {
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
