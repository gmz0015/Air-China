package com.service;

import com.dao.CrewDao;
import com.pojo.Crew;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrewServiceImpl implements CrewService{
    @Autowired
    private CrewDao crewDao;

    @Override
    public int addCrew(Crew crew) {
        return crewDao.addCrew(crew);
    }

    @Override
    public int deleteCrewByCallsign(int callsign) {
        return crewDao.deleteCrewByCallsign(callsign);
    }

    @Override
    public int updateCrew(Crew crew) {
        return crewDao.updateCrew(crew);
    }

    @Override
    public Crew queryByCallsign(int callsign) {
        return crewDao.queryByCallsign(callsign);
    }

    @Override
    public List<Crew> queryAllCrew() {
        return crewDao.queryAllCrew();
    }

    @Override
    public Crew authentication(String callsign) {
        return crewDao.authentication(callsign);
    }

}

