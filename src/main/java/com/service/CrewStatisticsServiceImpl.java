package com.service;

import com.dao.CrewStatisticsDao;
import com.pojo.CrewStatistics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrewStatisticsServiceImpl implements CrewStatisticsService {
    @Autowired
    private CrewStatisticsDao crewStatisticsDao;

    @Override
    public int addCrewStatistics(CrewStatistics crewStatistics) {
        return crewStatisticsDao.addCrewStatistics(crewStatistics);
    }

    @Override
    public int deleteCrewStatisticsByCallsign(int callsign) {
        return crewStatisticsDao.deleteCrewStatisticsByCallsign(callsign);
    }

    @Override
    public int updateCrewStatistics(CrewStatistics crewStatistics) {
        return crewStatisticsDao.updateCrewStatistics(crewStatistics);
    }

    @Override
    public List<CrewStatistics> queryByCallsign(int callsign) {
        return crewStatisticsDao.queryByCallsign(callsign);
    }

    @Override
    public List<CrewStatistics> queryAllCrewStatistics() {
        return crewStatisticsDao.queryAllCrewStatistics();
    }
}
