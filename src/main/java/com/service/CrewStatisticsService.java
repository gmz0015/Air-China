package com.service;

import com.pojo.CrewStatistics;

import java.util.List;

public interface CrewStatisticsService {
    int addCrewStatistics(CrewStatistics crewStatistics);

    int deleteCrewStatisticsByCallsign(int callsign);

    int updateCrewStatistics(CrewStatistics crewStatistics);

    List<CrewStatistics> queryByCallsign(int callsign);

    List<CrewStatistics> queryAllCrewStatistics();
}
