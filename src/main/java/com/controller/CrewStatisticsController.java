package com.controller;

import com.function.CalculateCrewStatistics;
import com.pojo.CrewStatistics;
import com.service.CrewStatisticsService;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/crew/statistics")
public class CrewStatisticsController {
    @Autowired
    private CrewStatisticsService crewStatisticsService;

    @RequestMapping("/query/{crewCallsign}")
    @ResponseBody // return json
    public JSONObject queryCrewStatistics(@PathVariable("crewCallsign") int callsign) {
        List<CrewStatistics> crewStatisticsList = crewStatisticsService.queryByCallsign(callsign);
        CalculateCrewStatistics processData = new CalculateCrewStatistics();
        processData.setData(crewStatisticsList, callsign);

        return processData.getData();
    }
}
